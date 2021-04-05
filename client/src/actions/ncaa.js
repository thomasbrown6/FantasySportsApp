import axios from 'axios';
import {
	GET_FBS_SCORES,
	GET_FCS_SCORES,
	GET_DIV3_SCORES,
	GET_ALL_NCAA_SCORES,
	NCAA_ERROR
} from './types';

// Get all accounts for specific user
export const getNCAALiveScores = (division) => (dispatch) => {
	//if (!division) division = 'fbs';

	axios
		.get(`/api/football/ncaa/${division}-scores`)
		.then((res) => {
			switch (division) {
				case 'fbs':
					dispatch({
						type: GET_FBS_SCORES,
						payload: res.data
					});
					break;

				case 'fcs-live':
					dispatch({
						type: GET_FCS_SCORES,
						payload: res.data
					});
					break;

				case 'div3':
					dispatch({
						type: GET_DIV3_SCORES,
						payload: res.data
					});
					break;

				case 'all':
					dispatch({
						type: GET_ALL_NCAA_SCORES,
						payload: res.data
					});
					break;

				default:
					return false;
			}
		})
		.catch((err) =>
			dispatch({
				type: NCAA_ERROR,
				payload: err
			})
		);
};
