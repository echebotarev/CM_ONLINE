import { ADD_BUTTON, DELETE_BUTTON, LOAD_BUTTONS } from "../constants";

export function addButton(button, themeId) {
	return {
		type: ADD_BUTTON,
		payload: { button, themeId }
	}
}

export function deleteButton(button, themeId) {
    return {
    	type: DELETE_BUTTON,
	    payload: { button, themeId }
    }
}

export function checkAndLoadButtons() {
    return (dispatch, getState) => {
    	const { buttons } = getState();

    	if (buttons.loading || buttons.loaded) return;

    	dispatch({
		    type: LOAD_BUTTONS,
		    callAPI: '/api/buttons'
	    })
    }
}