/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rate_Tab', {
    Years: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Rate: {
      type: "DOUBLE(10,4)",
      allowNull: true
    }
  }, {
    tableName: 'Rate_Tab'
  });
};
