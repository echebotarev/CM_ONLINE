import { START, SUCCESS, FAIL } from "../constants";

function CustomError(data) {
  return data;
}

export default store => next => action => {
  const { callAPI, type, payload, ...rest } = action;
  if (!callAPI) return next(action);

  let status;

  next({
    type: type + START,
    ...rest
  });

  fetch(callAPI.pathname, {
    method: callAPI.method,
    credentials: "include",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  })
    .then(res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      if (status !== 200) {
        throw new CustomError({
          payload: res
        });
      }

      if (res.error) {
        next({
          ...rest,
          type: type + FAIL,
          payload: {
            response: res
          }
        });
      } else {
        next({
          ...rest,
          type: type + SUCCESS,
          payload: {
            response: res
          }
        });
      }
    })
    .catch(error => {
      next({ ...rest, type: type + FAIL, error });
    });
};
