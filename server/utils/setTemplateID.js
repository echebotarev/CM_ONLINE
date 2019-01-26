function setTemplateID(req, res, next) {
  let { templateID } = req.query;

  if (templateID) {
    req.session.templateID = templateID;
  }

  return next(null);
}

export default setTemplateID;
