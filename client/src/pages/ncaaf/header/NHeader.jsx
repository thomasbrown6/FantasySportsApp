import React from 'react';
import logoo from '../img/BLogo.png';

function NHeader() {
    return (
        <div className="container-fluid"> 
        <div className="row">
          <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="App">
            </div>
            <div>
              <div>
                <div className="topnav1" id="myTopnav">
                  <a className="active"><img src={logoo} alt="logo" className="BLogo" /></a>
                  <a className="margin_top">NFL</a>
                  <div className="subnav">
                  
                  <button class="subnavbtn">NCAAF<i class="fa fa-caret-down"></i></button>
                  <div class="subnav-content">
                    <a href="#company">Home</a>
                    <a href="#team">Player Profile</a>
                    <a href="#careers">Score</a>
                    <a href="#careers">Standing</a>
                    <a href="#careers">Stats</a>
                    <a href="#careers">Teams</a>
                    <a href="#careers">Rankings</a>
                  </div>
                  </div>
                  <a className="margin_top">STATS</a>
                  <a className="margin_top">FANTASY</a>
                  <a className="margin_top">ARTICLES</a>
                  <a className="margin_top">NEWS</a>
                  <a className="margin_top">HELP</a>
                  <a className="margin_top">ABOUT</a>
                  <a className="login">LOGIN/</a>
                  <a className="signup">SIGN UP</a>
              </div>   
             </div>
            </div>
            </div>
          </div>
      </div>
    )
}

export default NHeader;
