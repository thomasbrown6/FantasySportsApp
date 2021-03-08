import { GET_FBS_SCORES, NCAA_ERROR } from '../actions/types';

import update from 'react-addons-update';

const initialState = {
	divisions: {
		fbs: {},
		fcs: {},
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
					fcs: state.divisions.fcs,
					div3: state.divisions.div3
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
