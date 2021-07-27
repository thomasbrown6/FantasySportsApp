import axios from 'axios';
import nfl from '../reducers/nfl';
import { GET_NFL_SCORES, NFL_ERROR } from './types';

export const getNFLScores = (division) => (dispatch) => {
	axios
		.get(`/api/football/nfl/scores`)
		.then((res) => {
			dispatch({
				type: GET_NFL_SCORES,
				payload: res.data
			});
		})
		.catch((err) =>
			dispatch({
				type: NFL_ERROR,
				payload: err
			})
		);
};
