import { GET_NFL_SCORES, NFL_ERROR } from '../actions/types';

const initialState = {
	nfl: {
		scores: []
	},
	error: null,
	loaded: false
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_NFL_SCORES:
			return {
				...state,
				nfl: {
					scores: payload
				},
				loaded: true
			};

		case NFL_ERROR:
			return {
				...state,
				error: payload,
				loaded: true
			};
		default:
			return state;
	}
}
