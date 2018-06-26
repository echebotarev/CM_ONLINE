import {
	ADD_BUTTON,
	DELETE_BUTTON,
	LOAD_TEMPLATES,
	DELETE_TEMPLATE,
	LOGOUT,
	START, SUCCESS,
	FAIL,
	GET_EDITABLE,
	BUTTON,
	EDITOR,
	OPEN,
	CLOSE, TEMPLATE, UPDATE, RETURN
} from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const ButtonStyleRecord = Record({
	background: null,
	color: null,
	padding: null,
	fontSize: null,
	textAlign: null,
	boxShadow: null,
	borderRadius: null,
	border: null
});

const ButtonRecord = Record({
	_id: null,
	type: null,
	text: null,
	link: null,
	style: ButtonStyleRecord,
	template: null,
	templatesButton: null
});

const ReducerRecord = Record({
	entities: arrToMap([], ButtonRecord),
	loading: false,
	loaded: false,
	creating: false,
	deleting: false,
	currentButton: null
});

const defaultState = new ReducerRecord();

export default (state = defaultState, action) => {
	const { type, payload, response } = action;

	switch (type) {
		case GET_EDITABLE + BUTTON:
			return state.getIn(['entities', payload.id]);

		case ADD_BUTTON + START:
			return state.setIn(['creating'], true);

		case ADD_BUTTON + SUCCESS:
			return state
				.setIn(['creating'], false)
				.updateIn(['entities'], entities => entities.concat(arrToMap([payload.response], ButtonRecord)));

		case UPDATE + BUTTON:
			return state
				.updateIn(['entities', payload.id, payload.name], () => payload.value);

		case RETURN + BUTTON:
			return state
				.updateIn(['entities', payload.id], () => payload.editableData);

		case DELETE_BUTTON + START:
			return state.setIn(['deleting'], true);

		case DELETE_BUTTON + SUCCESS:
			return state
				.setIn(['deleting'], false)
				.removeIn(['entities', payload.response.id]);

		case DELETE_TEMPLATE + SUCCESS:
			return state
				.updateIn(['entities'], entities => entities.filter(button => button.template !== payload.response.id));

		case LOAD_TEMPLATES + START:
			return state.setIn(['loading'], true);

		case LOAD_TEMPLATES + SUCCESS:
			return state
				.setIn(['loading'], false)
				.setIn(['loaded'], true)
				.setIn(['entities'], arrToMap(payload.response.buttons, ButtonRecord));

		case LOAD_TEMPLATES + FAIL:
			return;

		case LOGOUT + SUCCESS:
			return state
				.setIn(['loading'], false)
				.setIn(['loaded'], false)
				.setIn(['entities'], arrToMap([], ButtonRecord));

		case EDITOR + OPEN:
			return state.setIn(['currentButton'], payload.id);

		case EDITOR + CLOSE:
			return state.setIn(['currentButton'], null);
	}

	return state
}