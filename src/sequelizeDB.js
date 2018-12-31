import DB from './sequelize/models';

// INSERTING USERDETAILS TO user DB

const insertUserDetails = (id, name, picture) => {
  DB.users.findOrCreate({ where: { id, name, picture }, raw: true });
};
// INSERTING SHORTID AND DETAILS TO url DB
const insertToURLdb = (shortIdGenerated, longurl, userid) => {
  DB.urls.findOrCreate({
    where: {
      id: shortIdGenerated,
      longurl,
      userid,
      timestamp: DB.sequelize.fn('NOW'),
      count: 0,
    },
    raw: true,
  });
};

const selectFromURLdb = longurl => new Promise((resolve, reject) => {
  DB.urls
    .findAll({ where: { longurl }, raw: true })
    .then(result => resolve(result))
    .catch(error => reject(error));
});

const incrementCount = (shortid) => {
  DB.urls.update({ count: DB.sequelize.literal('count +1') }, { where: { id: shortid } });
};

const insertScreenshots = (screenshot, shortid) => {
  DB.urls.update({ screenshot }, { where: { id: shortid } });
};

const getValueFromPostgresDb = shortid => new Promise((resolve, reject) => {
  DB.urls
    .findAll({ where: { id: shortid }, raw: true })
    .then(result => resolve(result[0].longurl))
    .catch(error => reject(error));
});

const createdURL = id => new Promise((resolve, reject) => {
  DB.urls
    .findAll({ where: { userid: id }, raw: true })
    .then(result => resolve(result))
    .catch(error => reject(error));
});
module.exports = {
  createdURL,
  incrementCount,
  selectFromURLdb,
  insertScreenshots,
  insertToURLdb,
  getValueFromPostgresDb,
  insertUserDetails,
};
