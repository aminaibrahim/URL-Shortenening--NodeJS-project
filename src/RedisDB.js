import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client connected'); // eslint-disable-line
});
client.on('error', (err) => {
  console.log(`Something went wrong in Redis Connection ${err}`); // eslint-disable-line
});

const insertToRedisDb = (shorturl, longurl) => {
  client.setex(shorturl, 24 * 60 * 60, longurl);
};
const getValueFromRedisDb = shortid => new Promise((resolve, reject) => {
  client.get(shortid, (error, result) => {
    if (error) {
      return reject(error);
    }
    return resolve(result);
  });
});

module.exports = {
  insertToRedisDb,
  getValueFromRedisDb,
};
