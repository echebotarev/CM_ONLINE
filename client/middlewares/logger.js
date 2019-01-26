export default store => next => action => {
  console.log("STORE", store.getState());
  console.log("ACTION", action);
  next(action);
};
