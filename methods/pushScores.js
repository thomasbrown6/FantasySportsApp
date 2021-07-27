const pushScores = (resp) => {
	let data = [];

	if (
		resp &&
		resp.data &&
		resp.data.scores &&
		resp.data.scores.category &&
		resp.data.scores.category.match
	) {
		const matches = resp.data.scores.category.match;

		// matches show up as an array only when it's multiple games
		// checking if it's an array
		if (matches.isArray) {
			matches.foreach((match) => {
				const game = {
					awayTeam: match.awayteam.name,
					awayTeamScore: match.awayteam.totalscore,
					homeTeam: match.hometeam.name,
					homeTeamScore: match.hometeam.totalscore,
					status: match.status,
					timeLeft: match.timer,
					time: match.time,
					timezone: match.timezone,
					date: match.date,
					contestId: match.contestID
				};
				data.push(game);
			});
		} else {
			const game = {
				awayTeam: matches.awayteam.name,
				homeTeam: matches.hometeam.name,
				awayTeamScore: matches.awayteam.totalscore,
				homeTeamScore: matches.hometeam.totalscore,
				status: matches.status,
				timeLeft: matches.timer,
				time: matches.time,
				timezone: matches.timezone,
				date: matches.date,
				contestId: matches.contestID
			};
			data.push(game);
		}
	}

	matches = null;

	return data;
};

module.exports = pushScores;
