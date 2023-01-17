import 'assets/css/global.assets.css';
import 'assets/css/blocks/loading.assets.css';
import LoadingAnimation from 'assets/img/loading.webm'
import React from "react";

class Loading extends React.Component 
{

  render()
    {
      return(
          <div className="loading-home f f-justify-center f-align-center">

              <video className="loading-video" autoPlay muted loop>
                  <source src={LoadingAnimation} type="video/mp4" />
              </video>

          </div>
      );
    }
}

export default Loading;



