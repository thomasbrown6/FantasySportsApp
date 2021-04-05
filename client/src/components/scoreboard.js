import React from 'react'
import Game from './game'

class ScoreBoard extends React.Component {
    render() {
      const Logo = "http://loodibee.com/wp-content/uploads/nfl-";
      const Teams = {
        ARI: `${Logo}arizona-cardinals-team-logo-2-768x768.png`,
        ATL: `${Logo}atlanta-falcons-team-logo-2-768x768.png`,
        BAL: `${Logo}baltimore-ravens-team-logo-2-768x768.png`,
        BUF: `${Logo}buffalo-bills-team-logo-2-768x768.png`,
        CAR: `${Logo}carolina-panthers-team-logo-2-768x768.png`,
        CHI: `${Logo}chicago-bears-team-logo-2-768x768.png`,
        CIN: `${Logo}cincinnati-bengals-team-logo-768x768.png`,
        CLE: `${Logo}cleveland-browns-team-logo-2-768x768.png`,
        DAL: `${Logo}dallas-cowboys-team-logo-2-768x768.png`,
        DET: `${Logo}detroit-lions-team-logo-2-768x768.png`,
        GB: `${Logo}green-bay-packers-team-logo-2-768x768.png`,
        IND: `${Logo}indianapolis-colts-team-logo-2-768x768.png`,
        KC: `${Logo}kansas-city-chiefs-team-logo-2-768x768.png`,
        LAR: `${Logo}los-angeles-rams-team-logo-2-768x768.png`,
        MIA: `${Logo}miami-dolphins-team-logo-2-768x768.png`,
        MIN: `${Logo}minnesota-vikings-team-logo-2-768x768.png`,
        NO: `${Logo}new-orleans-saints-team-logo-2-768x768.png`,
        NYG: `${Logo}new-york-giants-team-logo-2-768x768.png`,
        NYJ: `${Logo}new-york-jets-team-logo-768x768.png`,
        PIT: `${Logo}pittsburgh-steelers-team-logo-2-768x768.png`,
        TB: `${Logo}tampa-bay-buccaneers-team-logo-2-768x768.png`,
        TEN: `${Logo}tennessee-titans-team-logo-2-768x768.png`,
      }
      
      return (
        <div className="scoreboard__container">
          <Game
            time="2:32 - 2nd"
            drive="2nd & 10"
            yard="MIN 25"
            channel="NBC"
            away={{ name: "MIN", score: 24, logo: Teams.MIN }} 
            home={{ name: "DAL", score: 7, logo: Teams.DAL }}
            final={false}
          />
          <Game 
            away={{ name: "DET", score: 13, logo: Teams.DET }} 
            home={{ name: "CHI", score: 20, logo: Teams.CHI }}
            final={true}
          />
          <Game
            away={{ name: "BAL", score: 49, logo: Teams.BAL }} 
            home={{ name: "CIN", score: 13, logo: Teams.CIN }}
            final={true}
          />
          <Game
            away={{ name: "BUF", score: 16, logo: Teams.BUF }} 
            home={{ name: "CLE", score: 19, logo: Teams.CLE }}
            final={true}
          />
          <Game
            away={{ name: "ATL", score: 26, logo: Teams.ATL }} 
            home={{ name: "NO", score: 9, logo: Teams.NO }} 
            final={true}
          />
          <Game
            away={{ name: "NYG", score: 27, logo: Teams.NYG }} 
            home={{ name: "NYJ", score: 34, logo: Teams.NYJ }} 
            final={true}
          />
          <Game
            away={{ name: "ARI", score: 27, logo: Teams.ARI }} 
            home={{ name: "TB", score: 30, logo: Teams.TB }} 
            final={true}
          />
          <Game
            away={{ name: "KC", score: 32, logo: Teams.KC }} 
            home={{ name: "TEN", score: 35, logo: Teams.TEN }} 
            final={true}
          />
          <Game
            away={{ name: "MIA", score: 16, logo: Teams.MIA }} 
            home={{ name: "IND", score: 12, logo: Teams.IND }} 
            final={true}
          />
          <Game
            away={{ name: "CAR", score: 16, logo: Teams.CAR }} 
            home={{ name: "GB", score: 24, logo: Teams.GB }} 
            final={true}
          />
          <Game
            away={{ name: "LAR", score: 12, logo: Teams.LAR }} 
            home={{ name: "PIT", score: 17, logo: Teams.PIT }} 
            final={true}
          />
        </div>
      );
    }
  }
 
export default ScoreBoard;