import jwt from 'jsonwebtoken';

const validityChecker = (req, res, next) => {
  try {
    const decodedtoken = jwt.verify(req.cookies.token, 'user');

    res.locals.user_id = decodedtoken.user_id;
    next();
  } catch (error) {
    res.send(' Not authorised');
  }
};
export default validityChecker;
