module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      name: DataTypes.STRING,
      picture: DataTypes.TEXT,
    },
    {},
  );
  // users.associate = function (models) {

  //   // associations can be defined here
  // };
  return users;
};
