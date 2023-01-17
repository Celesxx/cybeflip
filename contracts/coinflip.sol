// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract Coinflip is VRFConsumerBaseV2 
{

  VRFCoordinatorV2Interface COORDINATOR;

  //Network: Rinkeby
  address vrfCoordinator = 0x2eD832Ba664535e5886b75D64C46EB9a228C2610;
  bytes32 keyHash = 0x354d2f95da55398f44b7cff77da56283d9c6c829a4bdf1bbcaf2ad6a4d081f61;
  uint8 numWords =  1;
  uint16 requestConfirmations = 3;
  uint32 callbackGasLimit = 100000;
  uint64 subscriptionId;
  uint256 requestId;
  uint256 gameId;
  uint32 creatorId;
  uint256 lastGameId;
  uint256 randomWords;
  mapping(uint256 => CodeCreator) codeCreator;
  uint8 public _feePercentage = 10;
  uint8 public _creatorFee = 1;
  address payable public _admin;
  mapping(uint256 => Game) public _games;

  struct CodeCreator
  {
    uint64 id;
    string code;
    address payable sponsor;
  }

  struct Game 
  {
    uint256 id;
    uint256 bet;
    uint256 amount;
    address payable player;
  }


  event Withdraw(address _admin, uint256 amount);
  event Received(address indexed sender, uint256 amount);
  event Result(uint256 id, uint256 bet, uint256 amount, address player, uint256 winAmount, uint256 randomResult, uint256 time);


  constructor(uint64 subscription) VRFConsumerBaseV2(vrfCoordinator) 
  {
    COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
    _admin = payable(msg.sender);
    subscriptionId = subscription;
  }

  // Allows this contract to receive payments
  receive() external payable onlyAdmin {}

  modifier onlyAdmin() 
  {
    require(msg.sender == _admin, 'caller is not the admin');
    _;
  }

  modifier onlyVFRC() 
  {
    require(msg.sender == vrfCoordinator, 'only VFRC can call this function');
    _;
  }



  //Request for randomness
  function requestRandomWords() internal 
  {
    requestId = COORDINATOR.requestRandomWords(keyHash, subscriptionId, requestConfirmations, callbackGasLimit, numWords );
  }
  
  function fulfillRandomWords(uint256, /* requestId */ uint256[] memory randomWord) internal override 
  {
    randomWords = randomWord[0] % 2;
    verdict(randomWords);
  }



  function game(uint256 bet, string memory code) public payable returns (bool) 
  { 
    uint256 commission = (msg.value - (msg.value % 100)) * _feePercentage / 100;
    uint256 sponsorReward = ( (msg.value - commission) - ( (msg.value - commission) % 100) ) * _creatorFee / 100;

    require(bet <= 1, 'Error, accept only 0 and 1');
    require(msg.value != 0, 'Error, avax value must be higher than 0');
    require(address(this).balance - commission >= msg.value - commission * 2, 'Error insufficent vault balance');


    if(bytes(code).length > 0)
    {
      for(uint64 i = 0; i <= creatorId; i++)
      {
        if( keccak256(abi.encodePacked(codeCreator[i].code)) == keccak256(abi.encodePacked(code)) )
        {
          codeCreator[i].sponsor.transfer(sponsorReward);
          payable(msg.sender).transfer(sponsorReward);
          break;
        }
      }
    }
    
    _admin.transfer(commission);
    _games[gameId] = Game(gameId, bet, msg.value - commission, payable(msg.sender));
    gameId = gameId + 1;
    requestRandomWords();

    return true;
  }


  function CreateCodeCreator(string memory code, address sponsor) public payable returns (bool) 
  { 
    require(bytes(code).length > 0, 'Error, code creator must be not null');
    require(sponsor != address(0), 'Error, address must be not null');

    codeCreator[creatorId] = CodeCreator(creatorId, code, payable(sponsor));
    creatorId = creatorId + 1;
    
    return true;
  }

  

   // Send reward to the winers
  function verdict(uint256 random) public payable onlyVFRC 
  {
    //take bets from latest betting round one by one
    for(uint256 i=lastGameId; i<gameId; i++)
    {
      uint256 winAmount = 0;


      if(_games[i].bet == random)
      {
        winAmount = _games[i].amount * 2;
        _games[i].player.transfer(winAmount);
      }

      emit Result(_games[i].id, _games[i].bet, _games[i].amount, _games[i].player, winAmount, random, block.timestamp);
    }

    lastGameId = gameId;
  }

  //Get current balance
  function getBalance() public view returns(uint) { return address(this).balance; }
  function getCreatorCode(uint32 nbr) public view onlyAdmin returns(CodeCreator memory) { return codeCreator[nbr]; }
  function setFee(uint8 feePercentage) public onlyAdmin returns(uint8) { _feePercentage = feePercentage; return _feePercentage;}
  function setSponsorFee(uint8 feePercentage) public onlyAdmin returns(uint8) { _creatorFee = feePercentage; return _creatorFee;}
  function setAdmin(address admin) public onlyAdmin returns(address) { _admin = payable(admin); return _admin;}

  function withdrawBalance(uint256 amount) external payable onlyAdmin 
  {
    require(address(this).balance>=amount, 'Error, contract has insufficent balance');
    _admin.transfer(amount);

    emit Withdraw(_admin, amount);
  }
  
}