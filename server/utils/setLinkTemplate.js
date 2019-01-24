"use strict";

const setLinkTemplate = payload => {
  if (
    typeof payload.displayName === "undefined" ||
    typeof payload.link === "undefined"
  ) {
    return payload;
  }

  if (payload.displayName !== "Новый шаблон") {
    payload.link = payload.displayName;
  }

  return payload;
};

export default setLinkTemplate;
