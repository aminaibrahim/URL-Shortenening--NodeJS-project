import axios from 'axios';
import jwt from 'jsonwebtoken';
import db from './sequelizeDB';

const userInfo = (req, res) => new Promise((resolve, reject) => {
  axios
    .get(
      `https://graph.facebook.com/me?fields=id,name,picture{url}&access_token=${req.query.token}`,
    )
    .then(({ data }) => {
      const {
        id,
        name,
        picture: {
          data: { url },
        },
      } = data;
      const token = jwt.sign({ user_id: id }, 'user');
      db.insertUserDetails(id, name, url);
      return res.send(token);
    })
    .catch(error => reject(error));
});

export default userInfo;
