use cschool;

CREATE TABLE `cschool`.`Execuse_Tab` (
    `ECode` VARCHAR(10) NOT NULL,
    `Execuse` VARCHAR(60) NULL,
    PRIMARY KEY (`ECode`)
);

CREATE TABLE `cschool`.`MTRegistrations1` (
    `ParentKey` INT NOT NULL,
    `CheckNum` VARCHAR(60) NULL,
    `SumofTuition` DOUBLE(10, 4) NULL,
    `Forward` VARCHAR(10) NULL
);

CREATE TABLE `cschool`.`MTRegistrations` (
    `ParentKey` INT NOT NULL,
    `CheckNum` VARCHAR(60) NULL,
    `SumofTuition` DOUBLE(10, 4) NULL,
    `Forward` VARCHAR(10) NULL
);

create table `cschool`.`MT_NewRegistrations_Tab` (
    `ParentKey` INT NULL,
    `LName` VARCHAR(60) NULL,
    `FName` VARCHAR(60) NULL,
    `Amount` DOUBLE(10, 4) NULL,
    `CheckNum` INT NULL
);

create table `cschool`.`MT_NewRegistrations_Tab1` (
    `ParentKey` INT NULL,
    `LName` VARCHAR(60) NULL,
    `FName` VARCHAR(60) NULL,
    `Amount` DOUBLE(10, 4) NULL,
    `CheckNum` INT NULL
);

create table `cschool`.`MT_Service_Tab` (
    `Code` VARCHAR(10) NULL,
    `LName` VARCHAR(60) NULL,
    `FName` VARCHAR(60) NULL,
    `CName` VARCHAR(60) NULL,
    `Phone` VARCHAR(60) NULL,
    `ServiceDay` VARCHAR(60) NULL
);

create table `cschool`.`ParentCode_Tab` (
    `Code` VARCHAR(10) NOT NULL,
    `Description` VARCHAR(60) NULL,
    PRIMARY KEY (`Code`)
);

create table `cschool`.`Parent_Tab` (
    `ParentKey` INT NULL,
    `ParentCode` VARCHAR(10) NULL,
    `SortCode` INT NULL,
    `LName` VARCHAR(60) DEFAULT NULL,
    `FName` VARCHAR(60) DEFAULT NULL,
    `CName` VARCHAR(60) DEFAULT NULL,
    `Addr` VARCHAR(60) DEFAULT NULL,
    `City` VARCHAR(60) DEFAULT NULL,
    `State` VARCHAR(60) DEFAULT NULL,
    `Zip` VARCHAR(60) DEFAULT NULL,
    `HPhone` VARCHAR(60) DEFAULT NULL,
    `FWPhone` VARCHAR(60) DEFAULT NULL,
    `MWPhone` VARCHAR(60) DEFAULT NULL,
    `EMail` VARCHAR(60) DEFAULT NULL,
    `EmergencyName1` VARCHAR(60) DEFAULT NULL,
    `EmergencyCName1` VARCHAR(60) DEFAULT NULL,
    `EmergencyPhone1` VARCHAR(60) DEFAULT NULL,
    `EmergencyName2` VARCHAR(60) DEFAULT NULL,
	`EmergencyCName2` VARCHAR(60) DEFAULT NULL,
    `EmergencyPhone2` VARCHAR(60) DEFAULT NULL,
    `NewParent` VARCHAR(60) DEFAULT NULL,
    `MedicalInsurance` VARCHAR(10) DEFAULT NULL,
    `PTA` VARCHAR(10) DEFAULT NULL,
    `PTAFee` DOUBLE(10, 4) DEFAULT NULL,
    `Check_4` DOUBLE(10, 4) DEFAULT NULL,
    `CoopFee` DOUBLE(10, 4) DEFAULT NULL,
    `ServiceDay1_1` VARCHAR(45) DEFAULT NULL,
    `ServiceDay2` VARCHAR(45) DEFAULT NULL,
    `Comment` VARCHAR(60) DEFAULT NULL,
    `DonationAmt` DOUBLE(10, 4) DEFAULT NULL,
    `DonationCheck` DOUBLE(10, 4) DEFAULT NULL,
    `PrintInfo` VARCHAR(10) DEFAULT NULL
);

create table `cschool`.`Rate_Tab` (
    `Years` INT NULL,
    `Rate` DOUBLE(10, 4)
);

create table `cschool`.`Salary_Tab` (
    `TeacherKey` INT NULL,
    `TeacherLName` VARCHAR(60) NULL,
    `TeacherFName` VARCHAR(60) NULL,
    `TeacherCName` VARCHAR(60) NULL,
    `SS` VARCHAR(60) DEFAULT NULL,
    `Salary` DOUBLE(10, 4) NULL,
    `Hours` DOUBLE(10, 4) NULL,
    `ExtraPay` DOUBLE(10, 4) NULL,
    `Grade` VARCHAR(10) NULL,
    `SortKey` INT NULL,
    `Comment_1` VARCHAR(60) NULL
);

create table `cschool`.`SortCode_Tab` (
    `SortCode` INT NULL,
    `Grade` VARCHAR(10) NULL
);

create table `cschool`.`Staff_Tab` (
    `SID` INT NULL,
    `SortCode` INT DEFAULT NULL,
    `Title` VARCHAR(60) NULL,
    `LName` VARCHAR(60) NULL,
    `FName` VARCHAR(60) NULL,
    `CName` VARCHAR(60) NULL,
    `ClassRoom` VARCHAR(60) NULL,
    `EMail` VARCHAR(60) DEFAULT NULL
);

create table `cschool`.`Student_Tab` (
    `StudentKey` INT NULL,
    `ParentKey` INT NULL,
    `SortCode` INT NULL,
    `Code` VARCHAR(10) NULL,
    `LName` VARCHAR(60) NULL,
    `FName` VARCHAR(60) NULL,
    `CName` VARCHAR(60) NULL,
    `DOB` VARCHAR(60) NULL,
    `Gender` VARCHAR(10) NULL,
    `Grade` VARCHAR(10) DEFAULT NULL,
    `ofYrs` INT NULL,
    `Tuition` DOUBLE(10, 4) DEFAULT NULL,
    `Check` INT NULL,
    `SemesterCodeF` VARCHAR(10) NULL,
    `SemesterCodeS` VARCHAR(10) NULL,
    `Forward` VARCHAR(10) NULL,
    `Comment` VARCHAR(140) NULL,
    `SpeechContest` VARCHAR(10) NULL
);
