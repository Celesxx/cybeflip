import 'assets/css/global.assets.css';
import 'assets/css/pages/home.assets.css'
import 'assets/css/animation/keyframes.assets.css'
import React from 'react';
import { connect } from 'react-redux'
import Coin from 'assets/img/coin.png'
import LoadingAnimation from 'assets/img/loop.webm'

const MapStateToProps = (state) => 
{
  return { 
    address: state.login.address,
    balance: state.login.balance,
    gain: state.dashboard.gain,
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
        balance: this.props.balance,
        gain: this.props.gain,
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


    render()
    {
      return (

        <div className='home-body f f-justify-center f-align-center'>


            <div className='home-card-core f f-column f-justify-end f-align-center'>
                <div className='card-animation-core f f-justify-center f-align-center '>
                    <div className='card-animation-blur'></div>
                    {/* <img src={Coin} className='card-animation'></img> */}
                    <video className="card-animation" autoPlay muted loop>
                        <source src={LoadingAnimation} type="video/mp4" />
                    </video>
                </div>

                <div className='card-content f f-column f-justify-center f-align-center'>
                    <input className='card-input input' type='text' name='amount' id='amount' onFocus={this.handleKeyboardResize} onKeyPress={this.checkNumber} onChange={this.handleChange} placeholder="Insert amount here"></input>
                    <input className='card-input input' type='text' name='creator' id='creator' onFocus={this.handleKeyboardResize} onKeyPress={this.checkNumber} onChange={this.handleChange} placeholder="Insert creator code here"></input>
                    <div className='card-balance-core f f-row f-justify-center f-align-center'>
                        <p className='card-balance'>Balance : </p>
                        <p className='card-balance'>{this.state.balance}</p>
                    </div>
                    <div className='card-balance-core f f-row f-justify-center f-align-center'>
                        <p className='card-gain'>Gain count : </p>
                        <p className='card-gain'>{this.state.gain}</p>
                    </div>
                    <div className='card-button-core f f-row f-justify-between f-align-center'>
                        <button className='card-button button'>Heads</button>
                        <button className='card-button button'>Tails</button>
                    </div>
                </div>
            </div>


            <div className='home-line-1 f f-row f-justify-start f-align-center'>
                <div className='line-1 glow' />
                <div className='circle-1' />
            </div>

            <div className='home-line-2 f f-column f-justify-start f-align-start'>
                <div className='line-group-3 f f-column f-justify-start f-align-center'>
                    <div className='circle-3' />
                    <div className='line-3' />
                </div>
                <div className='line-group-2 f f-row f-justify-start f-align-center'>
                    <div className='line-2' />
                    <div className='circle-2' />
                </div>

                <div className='line-group-4 f f-column f-justify-start f-align-start'>
                    <div className='line-4' />
                    <div className='line-5' />
                </div>
            </div>



            <div className='home-line-3 f f-column f-justify-start f-align-start'>

                <div className='line-group-6 f f-reverse-column f-justify-start f-align-end'>
                    

                    <div className='line-subgroup-2 f f-column f-justify-start f-align-center'>
                        <div className='line-9' />
                        <div className='circle-5' />
                    </div>  

                    <div className='line-subgroup-1 f f-row f-justify-start f-align-center'>
                        <div className='line-8' />
                        <div className='circle-4' />
                    </div>   

                    <div className='line-subgroup-3 f f-column f-justify-start f-align-start'>
                        <div className='line-6' />
                        <div className='line-7' />
                    </div>
                </div>

                <div className='line-group-7 f f-reverse-column f-justify-end f-align-end'>
                    <div className='line-10' />  
                    <div className='line-11' />
                </div>
            </div>



        


            <div className='home-line-4 f f-reverse-column f-justify-start f-align-start'>
                <div className='line-12' />
                <div className='line-13' />
                <div className='line-group-8 f f-reverse-column f-justify-start f-align-center'>
                    <div className='line-14' />
                    <div className='circle-6' />
                </div>
                <div className='line-group-9 f f-reverse-row f-justify-end f-align-center'>
                    <div className='line-15' />
                    <div className='circle-7' />
                </div>
                <div className='line-group-10 f f-reverse-column f-justify-end f-align-start'>
                    <div className='line-16' />
                    <div className='line-subgroup-4 f f-reverse-column f-justify-end f-align-center'>
                        <div className='line-17' />
                        <div className='circle-8' />
                    </div>
                </div>
            </div>


            <div className='home-line-5 f f-reverse-column f-justify-end f-align-end'>
                <div className='line-18' />
                <div className='line-group-11 f f-reverse-row f-justify-end f-align-center'>
                    <div className='line-19' />
                    <div className='circle-9' />
                </div>
            </div>


            <div className='home-line-6 f f-reverse-column f-justify-start f-align-start'>
                <div className='line-20' />
                <div className='line-group-12 f f-row f-justify-start f-align-center'>
                    <div className='line-21' />
                    <div className='circle-10' />
                </div>
            </div>


            <div className='home-line-7 f f-reverse-column f-justify-start f-align-end'>
                <div className='line-22' />
                <div className='line-23' />
                <div className='line-group-13 f f-reverse-column f-justify-start f-align-center'>
                    <div className='line-24' />
                    <div className='circle-11' />
                </div>
                <div className='line-group-14 f f-row f-justify-end f-align-center'>
                    <div className='line-25' />
                    <div className='circle-12' />
                </div>
                <div className='line-group-15 f f-reverse-column f-justify-end f-align-start'>
                    <div className='line-26' />
                    <div className='line-27' />
                </div>
            </div>

            




            {/* part line 2  */}

            <div className='home-line-8 f f-reverse-row f-justify-end f-align-center'>
                <div className='line-28' />
                <div className='circle-13' />
            </div>



            <div className='home-line-9 f f-column f-justify-start f-align-end'>
                <div className='line-group-16 f f-column f-justify-end f-align-center'>
                    <div className='circle-14' />
                    <div className='line-29' />
                </div>
                <div className='line-group-17 f f-row f-justify-start f-align-center'>
                    <div className='circle-15' />
                    <div className='line-30' />
                </div>

                <div className='line-group-18 f f-column f-justify-start f-align-end'>
                    <div className='line-31' />
                    <div className='line-32' />
                </div>
            </div>





            <div className='home-line-10 f f-column f-justify-start f-align-end'>

                <div className='line-group-19 f f-reverse-column f-justify-start f-align-end'>
                    <div className='line-subgroup-6 f f-column f-justify-start f-align-center'>
                        <div className='line-34' />
                        <div className='circle-17' />
                    </div>  
                    <div className='line-subgroup-5 f f-reverse-row f-justify-start f-align-center'>
                        <div className='line-33' />
                        <div className='circle-16' />
                    </div>    

                    <div className='line-subgroup-7 f f-column f-justify-start f-align-end'>
                        <div className='line-35' />
                        <div className='line-36' />
                    </div>
                </div>

                <div className='line-group-20 f f-reverse-column f-justify-end f-align-start'>
                    <div className='line-37' />  
                    <div className='line-38' />
                </div>
            </div>


            <div className='home-line-11 f f-reverse-column f-justify-start f-align-end'>
                <div className='line-39' />
                <div className='line-40' />
                <div className='line-group-21 f f-reverse-column f-justify-start f-align-center'>
                    <div className='line-41' />
                    <div className='circle-18' />
                </div>
                <div className='line-group-22 f f-row f-justify-end f-align-center'>
                    <div className='line-42' />
                    <div className='circle-19' />
                </div>
                <div className='line-group-23 f f-reverse-column f-justify-start f-align-start'>
                    <div className='line-43' />
                    <div className='line-subgroup-8 f f-reverse-column f-justify-end f-align-center'>
                        <div className='line-44' />
                        <div className='circle-20' />
                    </div>
                </div>
            </div>



            <div className='home-line-12 f f-reverse-column f-justify-end f-align-start'>
                <div className='line-45' />
                <div className='line-group-24 f f-row f-justify-end f-align-center'>
                    <div className='line-46' />
                    <div className='circle-21' />
                </div>
            </div>


            <div className='home-line-13 f f-reverse-column f-justify-start f-align-end'>
                <div className='line-47' />
                <div className='line-group-25 f f-reverse-row f-justify-start f-align-center'>
                    <div className='line-48' />
                    <div className='circle-22' />
                </div>
            </div>



            <div className='home-line-14 f f-reverse-column f-justify-start f-align-start'>
                <div className='line-49' />
                <div className='line-50' />
                <div className='line-group-26 f f-reverse-column f-justify-start f-align-center'>
                    <div className='line-51' />
                    <div className='circle-23' />
                </div>
                <div className='line-group-27 f f-reverse-row f-justify-end f-align-center'>
                    <div className='line-52' />
                    <div className='circle-24' />
                </div>
                <div className='line-group-28 f f-reverse-column f-justify-end f-align-end'>
                    <div className='line-53' />
                    <div className='line-54' />
                </div>
            </div>




            <div className='home-dark-blur'/>


            

        </div>
      );
  }
}

export default connect(MapStateToProps)(Home);
