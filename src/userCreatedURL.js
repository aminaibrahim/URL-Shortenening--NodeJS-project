import jwt from 'jsonwebtoken';
import db from './sequelizeDB';

const createdURL = async (req, res) => {
  try {
    const decodedtoken = jwt.verify(req.cookies.token, 'user');

    const url = await db.createdURL(decodedtoken.user_id);

    res.send(url);
  } catch (error) {
    res.send(error);
  }
};
export default createdURL;
