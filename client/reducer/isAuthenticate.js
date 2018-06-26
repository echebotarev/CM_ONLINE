import {
	AUTHENTICATE, NOT,
	LOGIN,
	LOGOUT,
	REGISTER,
	START,
	SUCCESS,
	FAIL,
	MESSAGE,
	DELETE
} from "../constants";

const initialState = {
	auth: false,
	username: null,
	message: null
};

export default (state = initialState, action) => {
	const { type, payload, error, response } = action;

	switch (type) {
		case AUTHENTICATE + SUCCESS:
		case LOGIN + SUCCESS:
			return Object.assign({}, payload.response);

		case REGISTER + SUCCESS:
			if (payload.response.errors) {
				return Object.assign({}, {
					auth: false,
					username: null,
					message: payload.response.errors.email.message
				});
			}
			else return Object.assign({}, payload.response);

		case MESSAGE + DELETE:
			return Object.assign({}, payload, { message: null });

		case AUTHENTICATE + FAIL:
		case REGISTER + FAIL:
		case LOGIN + FAIL:
		case LOGOUT + SUCCESS:
			return typeof payload !== 'undefined' ?
				Object.assign({}, payload.response) : state;
	}

	return state
}