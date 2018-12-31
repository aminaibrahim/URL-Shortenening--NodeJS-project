const urlChecker = (req, res, next) => {
  const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}[.]{0,1}/;
  if (req.query.url === '') {
    res.send('No input given');
  } else if (!re.test(req.query.url)) {
    res.send('invalid URL');
  } else {
    next();
  }
};
export default urlChecker;
