import { GET_SCORES, NCAA_ERROR } from '../actions/types';

const initialState = {
	scores: [],
	error: null,
	loaded: false
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_SCORES:
			return {
				...state,
				scores: payload.scores,
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
