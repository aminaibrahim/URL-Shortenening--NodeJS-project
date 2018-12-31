module.exports = (sequelize, DataTypes) => {
  const urls = sequelize.define(
    'urls',
    {
      longurl: DataTypes.TEXT,
      userid: DataTypes.BIGINT,
      timestamp: DataTypes.DATE,
      count: DataTypes.INTEGER,
      screenshot: DataTypes.STRING,
    },
    {},
  );
  // url.associate = function (models) {
  //   // associations can be defined here
  // };
  return urls;
};
