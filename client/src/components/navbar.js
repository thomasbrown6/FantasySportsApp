import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav id="navbar">
          <ul id="navbar">
            <Link to="/nfl">
              <h3>
                <li>
                  NFL
                  <li />
                </li>
              </h3>
            </Link>
            <Link to="/ncaaf">
              <h3>
                <li>NCAAF</li>
              </h3>
            </Link>
            <Link to="/stats">
              <h3>
                <li>Stats</li>
              </h3>
            </Link>
            <Link to="/fantasy">
              <h3>
                <li>Fantasy HQ</li>
              </h3>
            </Link>
            <Link to="/Articles">
              <h3>
                <li>Articles</li>
              </h3>
            </Link>
            <Link to="/news">
              <h3>
                <li>News</li>
              </h3>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
