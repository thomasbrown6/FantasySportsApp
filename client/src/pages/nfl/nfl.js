// import logo from "./logo.svg";
import Home from "./pages/Home/Home";
import Draft from "./pages/Draft/Draft";
import Scoreboard from "./pages/Scoreboard/Scoreboard";
import Standings from "./pages/Standings/Standings";
import Schedule from "./pages/Schedule/Schedule";
import SearchPlayer from "./pages/SearchPlayer/SearchPlayer";
import PrimaryNavbar from "./pages/Common/PrimaryNavbar/PrimaryNavbar";
import ScorecardBar from "./pages/Common/ScorecardBar/ScorecardBar";
import Footer from "./pages/Common/Footer/Footer";
import field from "./assets/field.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./nfl.css";


class NFL extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="overLay">
        <div className="field">
          <div className="App">
            <Router>
              <PrimaryNavbar />
              <div className="scoreContainer">
                <ScorecardBar />
              </div>
              <Switch>
                <Route exact path="/stats" component={Home} />
                <Route exact path="/draft" component={Draft} />
                <>
                  <Route path="/scoreboard" component={Scoreboard} />
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/standings" component={Standings} />
                  <Route path="/search-player" component={SearchPlayer} />
                </>
              </Switch>
            </Router>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
    );
  }
}

export default NFL;
