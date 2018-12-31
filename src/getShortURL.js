import shortid from 'shortid';
import db from './sequelizeDB';
import getScreenshot from './image';

const shortUrl = async (req, res) => {
  try {
    const longurl = req.query.url;
    const data = await db.selectFromURLdb(longurl);

    if (data.length) {
      res.send(data[0].id);
    } else {
      const user = res.locals.user_id;
      const shortIdGenerated = shortid.generate();

      try {
        getScreenshot(longurl, shortIdGenerated);
      } catch (error) {
        console.log(error); // eslint-disable-line
      }

      db.insertToURLdb(shortIdGenerated, longurl, user);

      res.send(shortIdGenerated);
    }
  } catch (error) {
    res.send(error);
  }
};

export default shortUrl;
