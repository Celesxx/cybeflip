import 'assets/css/global.assets.css';
import 'assets/css/pages/home.assets.css'
import React from "react";
import Home from "components/blocks/home.block.jsx"
import Navbar from "components/blocks/navbar.block.jsx"

class Index extends React.Component 
{

  constructor(props) 
  {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {}
  componentWillUnmount() {}
  componentDidMount() {}

  render()
  {
      return(
          <div className="home">
              <Navbar></Navbar> 
              <Home isMobile={this.state.isMobile}/>
          </div>
      )
    }
}

export default Index;
