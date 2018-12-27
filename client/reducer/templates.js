import {
	LOAD_TEMPLATES,
	ADD_TEMPLATE,
	DELETE_TEMPLATE,
	LOGOUT,
	SET,
	CURRENT_TEMPLATE,
	START,
	SUCCESS,
	FAIL,
	UPDATE,
	AND,
	SAVE,
	RETURN,
	TEMPLATE
} from "../constants";
import { arrToMap } from "./utils";
import { Record } from 'immutable';

const TemplateRecord = Record({
	_id: null,
	displayName: null,
	logotypePicture: null,
	backgroundColor: null,
	link: null,
	user: null
});

const ReducerRecord = Record({
	entities: arrToMap([], TemplateRecord),
	currentTemplate: null,
	loading: false,
	loaded: false,
	creating: false,
	deleting: false
});

const defaultState = new ReducerRecord();

export default (state = defaultState, action) => {
	const { type, payload, response, editableData, error } = action;

	switch (type) {
		case ADD_TEMPLATE + START:
			return state.setIn(['creating'], true);

		case ADD_TEMPLATE + SUCCESS:
			return state
				.setIn(['creating'], false)
				.setIn(['currentTemplate'], payload.response._id)
				.updateIn(['entities'], entities => entities.concat(arrToMap([payload.response], TemplateRecord)));

		case DELETE_TEMPLATE + START:
			return state.setIn(['deleting'], true);

		case DELETE_TEMPLATE + SUCCESS:
			return state
				.setIn(['deleting'], false)
				.removeIn(['entities', payload.response.id])
				.setIn(
					['currentTemplate'],
					state.getIn(['currentTemplate']) === payload.response.id ?
						state.getIn(['entities']).keySeq().first() :
						state.getIn(['currentTemplate'])
				);

		case UPDATE + TEMPLATE:
			return state
				.updateIn(['entities', payload.id, payload.name], () => payload.value);

		case RETURN + TEMPLATE:
			return state
				.updateIn(['entities', payload.id], () => payload.editableData);

		case SAVE + TEMPLATE + FAIL:
			return state
				.updateIn(['entities', error.payload.id], () => editableData);

		case LOAD_TEMPLATES + START:
			return state.setIn(['loading'], true);

		case LOAD_TEMPLATES + SUCCESS:
			return state
				.setIn(['loading'], false)
				.setIn(['loaded'], true)
				.setIn(['entities'], arrToMap(payload.response.templates, TemplateRecord));

		case LOAD_TEMPLATES + FAIL:
			return;

		case LOGOUT + SUCCESS:
			return state
				.setIn(['loading'], false)
				.setIn(['loaded'], false)
				.setIn(['entities'], arrToMap([], TemplateRecord));

		case SET + CURRENT_TEMPLATE:
			return state.setIn(['currentTemplate'], payload)
	}

	return state
}
