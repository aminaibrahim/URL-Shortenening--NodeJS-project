import Sequelize from 'sequelize';

const sequelize = new Sequelize('urlshortening', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

const db = sequelize;

const selectFromURLdb = longurl => new Promise((resolve, reject) => {
  db.query(`SELECT shortid FROM url WHERE longurl='${longurl}'`, {
    type: db.QueryTypes.SELECT,
  })
    .then(result => resolve(result))
    .catch(error => reject(error));
});

const insertToURLdb = (shortIdGenerated, longurl, user) => {
  db.query(
    `INSERT INTO url (shortid,longurl,user_id,timestamp,count) VALUES ('${shortIdGenerated}', '${longurl}','${user}',NOW(),0)`,
    {
      type: db.QueryTypes.INSERT,
    },
  );
};

const insertScreenshots = (screenshot, shortid) => {
  db.query(`UPDATE url SET  screenshot= '${screenshot}' WHERE shortid = '${shortid}'`, {
    type: db.QueryTypes.UPDATE,
  });
};

const incrementCount = (shortid) => {
  db.query(`UPDATE url SET  count = count + 1 WHERE shortid = '${shortid}'`, {
    type: db.QueryTypes.UPDATE,
  });
};

const getValueFromPostgresDb = shortid => new Promise((resolve, reject) => {
  db.query(`SELECT  longurl FROM url WHERE shortid= '${shortid}'`, {
    type: db.QueryTypes.SELECT,
  })
    .then(result => resolve(result))
    .catch(error => reject(error));
});

const insertUserDetails = (id, name, picture) => {
  db.query(
    `INSERT INTO userdetails (user_id,username,picture)
            VALUES ('${id}','${name}','${picture}')ON CONFLICT (user_id) DO NOTHING;`,
    {
      type: db.QueryTypes.UPSERT,
    },
  );
};
const createdURL = id => new Promise((resolve, reject) => {
  db.query(
    `SELECT shortid, longurl, timestamp, count,screenshot FROM url WHERE user_id ='${id}'`,
    {
      type: db.QueryTypes.SELECT,
    },
  )
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
