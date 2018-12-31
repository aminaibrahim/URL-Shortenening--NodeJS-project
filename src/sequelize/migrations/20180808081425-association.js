module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'urls', // name of Target model
    'userid', // name of the key we're adding
    {
      type: Sequelize.BIGINT,
      references: {
        model: 'users', // name of Source model
        key: 'id',
      },
    },
  ),

  down: queryInterface => queryInterface.removeColumn(
    'urls', // name of the Target model
    'userid', // key we want to remove
  ),
};
