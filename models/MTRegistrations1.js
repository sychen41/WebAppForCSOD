/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MTRegistrations1', {
    ParentKey: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CheckNum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SumofTuition: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    Forward: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'MTRegistrations1'
  });
};
