import React from 'react'



class Navigation extends React.Component {  
    render() {
      const logo = "";
      
      return (
        <nav className="nav__container">
          <div className="nav__content">
            <div className="logo__container">
              <img src={logo} />
            </div>
            <ul className="nav__items">
              <li>NFL</li>
              <li>NHL</li>
              <li>NBA</li>
              <li>MLB</li>
              <li>NCAAF</li>
              <li>Soccer</li>
              <li>MMA</li>
            </ul>
          </div>
        </nav>
      );
    }
  }

  export default Navigation;