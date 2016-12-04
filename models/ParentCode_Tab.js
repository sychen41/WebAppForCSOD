/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ParentCode_Tab', {
    Code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ParentCode_Tab'
  });
};
