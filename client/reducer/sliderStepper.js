import { IS, DRAG, START, STOP } from "../constants";

const defaultState = {
	isDraggable: false
};

export default (state = defaultState, action) => {
	const { type } = action;

	switch (type) {
		case IS + DRAG + START:
			return Object.assign({}, {
				isDraggable: true
			});

		case IS + DRAG + STOP:
			return Object.assign({}, {
				isDraggable: false
			});
	}

	return state
}