/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Student_Tab', {
    StudentKey: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      primaryKey: true
    },
    ParentKey: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SortCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
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
    DOB: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Grade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ofYrs: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Tuition: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    Check: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SemesterCodeF: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SemesterCodeS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Forward: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Comment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SpeechContest: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Student_Tab'
  });
};
