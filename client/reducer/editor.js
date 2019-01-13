import {
	EDITOR,
	OPEN,
	CLOSE,
	SUCCESS,
	FAIL,
	SET,
	SAVE,
	TEMPLATE,
	BUTTON,
	EDITABLE_DATA
} from "../constants";
import { arrToMap } from "./utils";
import { Record } from 'immutable';

const defaultState = {
	open: false,
	id: null,
	type: null,
	editableData: null
};

export default (state = defaultState, action) => {
	const { type, payload, response } = action;

	switch (type) {
		case EDITOR + OPEN:
			return Object.assign({}, {
				open: true,
				id: payload.id,
				type: payload.type,
				coords: payload.coords,
				advanced: payload.advanced,
				editableData: null
			});

		case EDITOR + CLOSE:
			return Object.assign({}, {
				open: false,
				id: null,
				type: null,
				editableData: null
			});

		case SET + EDITABLE_DATA:
			return Object.assign({}, state, { editableData: payload });
	}

	return state
}
