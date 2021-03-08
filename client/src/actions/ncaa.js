import axios from 'axios';
import { GET_SCORES, NCAA_ERROR } from './types';

// Get all accounts for specific user
export const getNCAALiveScores = () => (dispatch) => {
	axios
		.get('/api/football/ncaa/fbs-scores')
		.then((res) =>
			dispatch({
				type: GET_SCORES,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: NCAA_ERROR,
				payload: err
			})
		);
};
