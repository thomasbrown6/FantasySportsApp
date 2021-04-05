import React from 'react';
import Table from 'react-bootstrap/Table';

class Data extends React.Component {
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
			fumrecovery: this.props.fumrecovery
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
			fumrecovery
		} = this.state;

		return (
			<tbody>
				<tr>
					<td>{rank}</td>
					<td>{name}</td>
					<td>{team}</td>
					<td>{position}</td>
					<td>{week}</td>
					<td responsive>{opponent}</td>
					<td>{fantasypoints}</td>
					<td>{fantasygame}</td>
					<td>{passyards}</td>
					<td>{passtd}</td>
					<td>{passint}</td>
					<td>{rushyards}</td>
					<td>{rushtd}</td>
					<td>{receptions}</td>
					<td>{recyards}</td>
					<td>{rectd}</td>
					<td>{sacks}</td>
					<td>{defints}</td>
					<td>{forcefum}</td>
					<td>{fumrecovery}</td>
				</tr>
			</tbody>
		);
	}
}
export default Data;
