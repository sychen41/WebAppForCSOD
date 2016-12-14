/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Staff_Tab', {
    SID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SortCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Title: {
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
    ClassRoom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EMail: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Staff_Tab'
  });
};
