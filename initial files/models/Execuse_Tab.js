/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Execuse_Tab', {
    ECode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Execuse: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Execuse_Tab'
  });
};
