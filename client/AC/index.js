import {
	SET,
	RETURN,
	ADD_BUTTON,
	DELETE_BUTTON,
	ADD_TEMPLATE,
	DELETE_TEMPLATE,
	LOAD_BUTTONS,
	LOAD_TEMPLATES,
	AUTHENTICATE,
	LOGIN,
	LOGOUT,
	REGISTER,
	MESSAGE,
	DELETE,
	CURRENT_TEMPLATE,
	EDITOR,
	OPEN,
	CLOSE,
	GET_EDITABLE,
	BUTTON,
	TEMPLATE,
	UPDATE,
	AND,
	SAVE, EDITABLE_DATA,
	IS, DRAG, STOP, START
} from "../constants";
import { push }       from 'react-router-redux';
import isAuthenticate from "../reducer/isAuthenticate";

export function addItem(type, id) {
	return (dispatch, getState) => {
		let { buttons, templates } = getState();
		if (buttons.creating || templates.creating) return;

		dispatch({
			type: type === 'btn' ? ADD_BUTTON : ADD_TEMPLATE,
			callAPI: {
				pathname: `/api/${type === 'btn' ? 'buttons' : 'templates'}`,
				method: 'POST'
			},
			payload: { id }
		})
	}
}

export function deleteItem(type, id) {
	return (dispatch, getState) => {
		let { buttons, templates } = getState();
		if (buttons.deleting || templates.deleting) return;
		if (type === 'tmp' && templates.entities.size === 1) return;

		dispatch({
			type: type === 'btn' ? DELETE_BUTTON : DELETE_TEMPLATE,
			callAPI: {
				pathname: `/api/${type === 'btn' ? 'buttons' : 'templates'}`,
				method: 'DELETE'
			},
			payload: { id }
		})
	}
}

export function setCurrentTemplate(templateId) {
    return {
    	type: SET + CURRENT_TEMPLATE,
	    payload: templateId
    }
}

export function checkAndLoadButtons() {
    return (dispatch, getState) => {
    	const { buttons } = getState();

    	if (!getState().isAuthenticate.auth) return;
    	if (buttons.loading || buttons.loaded) return;

    	dispatch({
		    type: LOAD_BUTTONS,
		    callAPI: {
		    	pathname: '/api/buttons',
			    method: 'GET'
		    }
	    })
    }
}

export function checkAndLoadTemplates() {
	return (dispatch, getState) => {
		const { templates, isAuthenticate } = getState();

		if (!getState().isAuthenticate.auth) {
			return;
		}
		if (templates.loading || templates.loaded) {
			return;
		}

		dispatch({
			type: LOAD_TEMPLATES,
			callAPI: {
				pathname: `/api/templates/${isAuthenticate.id}`,
				method: 'GET'
			}
		})
	}
}

export function isNotAuthenticated() {
    return (dispatch, getState) => {
    	dispatch(push('/login'));
    }
}

export function checkAuthenticate() {
	return {
		type: AUTHENTICATE,
		callAPI: {
			pathname: '/users',
			method: 'GET'
		}
	}
}

export function setDraggableSlider(value) {
	let type = value ?
		IS + DRAG + START :
		IS + DRAG + STOP;

    return { type }
}

export function openColorPicker(value, payload) {
	let type = value ?
		SET + OPEN :
		SET + CLOSE;

	return { type, payload }
}

export function deleteMessage() {
	return (dispatch, getState) => {
		dispatch({
			type: MESSAGE + DELETE,
			payload: getState().isAuthenticate
		})
	}
}

export function authorization(email, password, username) {
    return (dispatch, getState) => {
    	let state = getState();

    	switch (state.router.location.pathname) {
		    case '/login':
		    	dispatch({
				    type: LOGIN,
				    callAPI: {
				    	pathname: '/users/login',
					    method: 'POST'
				    },
				    payload: { email, password }
			    });
			    break;

		    case '/register':
			    dispatch({
				    type: REGISTER,
				    callAPI: {
					    pathname: '/users/register',
					    method: 'POST'
				    },
				    payload: { email, password, username }
			    });
			    break;

		    case '/logout':
		    	dispatch({
				    type: LOGOUT,
				    callAPI: {
				    	pathname: '/users/logout',
					    method: 'POST'
				    }
		    	});
		    	break;
	    }
    }
}

export function openEditor(type, id, advanced) {
	return {
		type: EDITOR + OPEN,
		payload: { type, id, advanced }
	}
}

export function closeEditor(type, id) {
	return {
		type: EDITOR + CLOSE,
		payload: { type, id }
	}
}

export function updateItem(payload) {
	return (dispatch, getState) => {
		dispatch({
			type: payload.type === 'templates' ? UPDATE + TEMPLATE : UPDATE + BUTTON,
			payload: payload
		})
	}
}

export function returnData() {
	return (dispatch, getState) => {
		let { id, type, editableData } = getState().editor;

		dispatch({
			type: type === 'templates' ? RETURN + TEMPLATE : RETURN + BUTTON,
			payload: { id, editableData }
		})
	}
}

export function saveData() {
	return (dispatch, getState) => {
		let { id, type, editableData } = getState().editor;
		let payload = getState()[type].getIn(['entities', id]).toJSON();

		dispatch({
			type: type === 'templates' ? SAVE + TEMPLATE : SAVE + BUTTON,
			callAPI: {
				pathname: `/api/${type}/${id}`,
				method: 'PUT'
			},
			payload,
			editableData
		})
	}
}

export function pureSaveData(payload) {
    return (dispatch, getState) => {
	    let { type, id } = payload,
		    data = getState()[type].getIn(['entities', id]).toJSON();

	    dispatch({
		    type: type === 'templates' ? SAVE + TEMPLATE : SAVE + BUTTON,
		    callAPI: {
			    pathname: `/api/${type}/${id}`,
			    method: 'PUT'
		    },
		    payload: data
	    })
    }
}

export function setEditableData(payload) {
    return {
    	type: SET + EDITABLE_DATA,
	    payload
    }
}
