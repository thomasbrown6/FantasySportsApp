import React from "react";
import Table from "react-bootstrap/Table";
import Data from "../components/tabledata";

class Statstable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: this.props.rank,
      name: this.props.name,
      team: this.props.team,
      position: this.props.position,
      opponent: this.props.opponent,
      week: this.props.week,
      fantasypoints: this.props.fantasypoints,
      fantasygame: this.props.fantasygame,
      passyards: this.props.passyards,
      passtd: this.props.passtd,
      passint: this.props.passint,
      rushyards: this.props.rushyards,
      rushtd: this.props.rushtd,
      receptions: this.props.receptions,
      recyards: this.props.recyards,
      rectd: this.props.rectd,
      sacks: this.props.sacks,
      defints: this.props.defints,
      forcefum: this.props.forcefum,
      fumrecovery: this.props.fumrecovery,
    };
  }
  render() {
    const {
      rank,
      name,
      team,
      position,
      week,
      fantasypoints,
      fantasygame,
      passyards,
      passtd,
      passint,
      rushyards,
      rushtd,
      opponent,
      receptions,
      recyards,
      rectd,
      sacks,
      defints,
      forcefum,
      fumrecovery,
    } = this.state;
    return (
      <div>
        <Table size="sm" responsive="sm" striped bordered hover id="stats">
          <thead>
            <tr>
              <th></th>
              <th responsive></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th> </th>
              <th colSpan="3">Passing</th>
              <th colSpan="2">Rushing</th>
              <th colSpan="3">Receiving</th>
              <th colSpan="4">Defense</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Team</th>
              <th>Position</th>
              <th>Week</th>
              <th responsive>Opponent</th>
              <th>FPTs</th>
              <th>FPTs/G</th>
              <th>Yards</th>
              <th>Touchdowns</th>
              <th>Interceptions</th>
              <th>Rush Yards</th>
              <th>Rush TD's</th>
              <th>Receptions</th>
              <th>Rec Yards</th>
              <th>Rec Td's</th>
              <th>Sacks</th>
              <th>Interceptions</th>
              <th>Force Fumble</th>
              <th>Fumble Recovery</th>
            </tr>
          </thead>

          <Data
            name="Pat Mahomes"
            rank="1"
            team="KC Chiefs"
            week="Week 7"
            opponent="49ers"
            position="QB"
            fantasypoints="38.5"
            fantasygame="31.2"
            passyards="412"
            passtd="3"
            passint="1"
            rushtd="1"
            rushyards="42"
          />
        </Table>
      </div>
    );
  }
}

export default Statstable;
