import db from './sequelizeDB';
import redisDB from './RedisDB';

const originalURL = async (req, res) => {
  try {
    // to postgres
    // console.log(req);

    const data = await db.getValueFromPostgresDb(req.params.id);

    if (!data) res.end();
    else {
      // not yet db.so inserting
      db.incrementCount(req.params.id);
      redisDB.insertToRedisDb(req.params.id, data);
      res.redirect(data);
    }
  } catch (error) {
    res.end();
  }
};
export default originalURL;
