/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MT_Service_Tab', {
    Code: {
      type: DataTypes.STRING,
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
    CName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ServiceDay: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'MT_Service_Tab'
  });
};
