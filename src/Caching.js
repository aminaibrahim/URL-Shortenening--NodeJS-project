import redisDB from './RedisDB';
import db from './sequelizeDB';

const cacheCheck = async (req, res, next) => {
  const data = req.params.id;

  try {
    const result = await redisDB.getValueFromRedisDb(data);

    if (!result) {
      // not in cache
      next();
    } else {
      // getting value from cache

      db.incrementCount(req.params.id);
      res.redirect(result);
    }
  } catch (error) {
    res.send(`error occured in caching${error}`);
  }
};
export default cacheCheck;
