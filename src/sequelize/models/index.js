const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const db = {};
const sequelize = new Sequelize('urlshortening', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 10000,
  },
  logging: true,
});

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.users.hasMany(db.urls, { foreignKey: 'userid' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
