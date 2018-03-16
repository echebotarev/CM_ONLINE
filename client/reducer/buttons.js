import {
	ADD_BUTTON,
	DELETE_BUTTON,
	LOAD_BUTTONS,
	START, SUCCESS,
	FAIL
} from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const ButtonRecord = Record({
	id: null,
	type: null,
	text: null,
	link: null,
	background: null,
	color: null
});

const ReducerRecord = Record({
	entities: arrToMap([], ButtonRecord),
	loading: false,
	loaded: false
});

const defaultState = new ReducerRecord();

export default (state = defaultState, action) => {
	const { type, payload, response } = action;

	switch (type) {
		case ADD_BUTTON:
			return;

		case DELETE_BUTTON:
			return;

		case LOAD_BUTTONS + START:
			return state.setIn(['loading'], true);

		case LOAD_BUTTONS + SUCCESS:
			return state
				.setIn(['loading'], false)
				.setIn(['loaded'], true)
				.setIn(['entities'], arrToMap(payload.response, ButtonRecord));
	}

	return state
}