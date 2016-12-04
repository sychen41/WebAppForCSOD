/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Parent_Tab', {
    ParentKey: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ParentCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SortCode: {
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
    CName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Addr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Zip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    HPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FWPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MWPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EMail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EmergencyName1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EmergencyCName1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EmergencyPhone1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EmergencyName2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EmergencyCName2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EmergencyPhone2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NewParent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MedicalInsurance: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PTA: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PTAFee: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    Check_4: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    CoopFee: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    ServiceDay1_1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ServiceDay2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Comment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DonationAmt: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    DonationCheck: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    PrintInfo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Parent_Tab'
  });
};
