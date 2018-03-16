import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
	const { callAPI, type, ...rest } = action;
	console.log('action', action);

	if (!callAPI) return next(action);
	next({
		type: type + START,
		...rest
	});

	setTimeout(() => {
		fetch(callAPI)
			.then(res => {return res.json();})
			.then(response => next({
				...rest,
				type: type + SUCCESS,
				payload: {
					response: response
				}
			}))
			.catch(error => {
				console.log(error);
				next({...rest, type: type + FAIL, error})
			})
	}, 2000)
}