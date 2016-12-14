/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Salary_Tab', {
    TeacherKey: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TeacherLName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TeacherFName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TeacherCName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Salary: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    Hours: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    ExtraPay: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    Grade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SortKey: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Comment_1: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Salary_Tab'
  });
};
