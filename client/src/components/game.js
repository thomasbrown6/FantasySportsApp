import React from 'react'

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: this.props.time,
        drive: this.props.drive,
        yard: this.props.yard,
        channel: this.props.channel,
        away: {
          name: this.props.away.name,
          score: this.props.away.score,
          logo: this.props.away.logo
        },
        home: {
          name: this.props.home.name,
          score: this.props.home.score,
          logo: this.props.home.logo
        },
        final: this.props.final,
        winner: this.props.final && this.props.home.score > this.props.away.score ? this.props.home.name : this.props.away.name
      }
    }
   
    render() {
      const { time, drive, yard, away, home, final, winner, channel } = this.state;
      
      return (
        <div className="game__container">
          <div className="game__top-bar">
            <span className={`game__time ${time ? "in-progress" : ""}`}>{ time ? time : "Final" }</span>
            { final ? null : <span className="game__channel">{channel}</span> }
          </div>
          <div className="info-split">
            <div className="team__container">
              <div className="team">
                <img className="team__logo" src={away.logo} alt={`${away.name} team logo`} />
                <p className={`team__name ${!final ? "" : winner === home.name ? "losing-team" : ""}`}>{away.name}</p>
                <p className={`team__score ${!final ? "" : winner === home.name ? "losing-team" : ""}`}>{away.score}</p>
              </div>
              <div className="team">
                <img className="team__logo" src={home.logo} alt={`${away.name} team logo`} />
                <p className={`team__name ${!final ? "" : winner === away.name ? "losing-team" : ""}`}>{home.name}</p>
                <p className={`team__score ${!final ? "" : winner === away.name ? "losing-team" : ""}`}>{home.score}</p>
              </div>
            </div>
            { final ? null :
            <div className="game__in-progress">
              <span>
                { drive }<br/>
                { yard }
              </span>
            </div> }
          </div>
        </div>
      );
    }
  }

  export default Game;