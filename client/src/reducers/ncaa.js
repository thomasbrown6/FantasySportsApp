import {
	GET_FBS_SCORES,
	GET_FCS_SCORES,
	GET_DIV3_SCORES,
	NCAA_ERROR,
	GET_ALL_NCAA_SCORES
} from '../actions/types';

import update from 'react-addons-update';

const initialState = {
	divisions: {
		fbs: {},
		fcs_live_scores: [],
		div3: {}
	},
	error: null,
	loaded: false
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_FBS_SCORES:
			return {
				...state,
				divisions: {
					fbs: payload.scores,
					fcs_live_scores: state.divisions.fcs,
					div3: state.divisions.div3
				},
				loaded: true
			};
		case GET_FCS_SCORES:
			return {
				...state,
				divisions: {
					fbs: state.divisions.fbs,
					fcs_live_scores: payload,
					div3: state.divisions.div3
				},
				loaded: true
			};
		case GET_DIV3_SCORES:
			return {
				...state,
				divisions: {
					fbs: state.divisions.fbs,
					fcs_live_scores: state.divisions.fcs,
					div3: payload.scores
				},
				loaded: true
			};

		case GET_ALL_NCAA_SCORES:
			return {
				...state,
				divisions: {
					fbs: payload.fbs.scores,
					fcs_live_scores: payload.fcs.scores,
					div3: payload.div3.scores
				},
				loaded: true
			};

		case NCAA_ERROR:
			return {
				...state,
				error: payload,
				loaded: true
			};
		default:
			return state;
	}
}
