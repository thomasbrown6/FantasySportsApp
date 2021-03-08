import axios from 'axios';
import { GET_FBS_SCORES, NCAA_ERROR } from './types';

// Get all accounts for specific user
export const getNCAALiveScores = (division) => (dispatch) => {
	axios
		.get(`/api/football/ncaa/${division}-scores`)
		.then((res) =>
			dispatch({
				type: GET_FBS_SCORES,
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
