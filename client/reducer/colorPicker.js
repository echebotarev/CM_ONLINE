import { SET, OPEN, CLOSE } from "../constants";

const defaultState = {
	isOpen: false,
	currentColor: null,
	rect: null,
	isGradient: false
};

export default (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET + OPEN:
			return Object.assign({}, state, {
				isOpen: true,
				currentColor: payload.currentColor,
				rect: payload.rect,
				isGradient: payload.isGradient,
				callback: payload.callback
			});

		case SET + CLOSE:
			return Object.assign({}, state, { isOpen: false });
	}

	return state
}