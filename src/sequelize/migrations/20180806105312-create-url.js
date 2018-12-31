module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('urls', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.TEXT,
    },
    longurl: {
      type: Sequelize.TEXT,
    },
    timestamp: {
      type: Sequelize.DATE,
    },
    count: {
      type: Sequelize.INTEGER,
    },
    screenshot: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('urls'),
};
