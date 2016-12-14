/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SortCode_Tab', {
    SortCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grade: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SortCode_Tab'
  });
};
