/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MT_NewRegistrations_Tab1', {
    ParentKey: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Amount: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    CheckNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'MT_NewRegistrations_Tab1'
  });
};
