import 'assets/css/global.assets.css';
import 'assets/css/blocks/navbar.assets.css'
import React from "react";
import { connect } from 'react-redux'
import CybeFlip from "assets/img/cybeflipName.png"

const MapStateToProps = (state) => 
{
  return { 
    address: state.login.address,

  }; 
};

class Home extends React.Component 
{

    constructor(props) 
    {
        super(props);

        this.state = 
        {
            address: this.props.address,
        };
    }


    componentDidUpdate(prevProps, prevState, snapshot) 
    {
        for(const [key, value] of Object.entries(this.state))
        {
            if (prevProps[key] !== this.props[key])
            {   
                this.state[key] = this.props[key]
                this.forceUpdate();
            }
        }
    }

    componentDidMount() { }

    componentWillUnmount() { }

    connectWallet()
    {
        console.log("test")
    }


    render()
    {
        return (

        <div className="navbar f f-row f-justify-between f-align-center">
            <img className="navbar-logo" src={CybeFlip} alt={CybeFlip}/>
            <div className='navbar-button f f-justify-end f-align-center'>
                {
                    this.state.address !== "" 
                    ?<div className="navbar-address f f-justify-center f-align-center"><p>{ this.state.address.substr(0, 6) + 'TESTTTTT' +  this.state.address.substr( this.state.address.length - 6,  this.state.address.length)  }</p></div>
                    :<button className="navbar-metamask button f f-justify-center f-align-center" onClick={() => this.connectWallet()}> <p>Connect Metamask</p> </button>
                }
            </div>
        </div>
        );
    }
}

export default connect(MapStateToProps)(Home);
