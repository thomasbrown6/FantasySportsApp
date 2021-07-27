import React from 'react' 
import './ncaaf.css';
import NHeader from './header/NHeader';
import Jam from './jambotran/Jam';
import Scoreboard from './ScoreBoard/Scoreboard';
import Footer from './footer/Footer';

class NCAAF extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid"> 
          <div className="row">
            <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="App">
                <NHeader />
              </div>
              <Jam />
              <Scoreboard />
              </div>
            </div>
            <div className="main">
            <Footer />
            </div>
        </div>
      
    </>
    );
  }
}

export default NCAAF;
