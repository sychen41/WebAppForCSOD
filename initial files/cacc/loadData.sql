use cschool;
LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/Execuse_Tab.csv'
INTO TABLE cschool.Execuse_Tab
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/MT-Registrations.csv'
INTO TABLE cschool.MTRegistrations
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/MT-Registrations1.csv'
INTO TABLE cschool.MTRegistrations1
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/MT_NewRegistrations_Tab.csv'
INTO TABLE cschool.MT_NewRegistrations_Tab
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/MT_NewRegistrations_Tab1.csv'
INTO TABLE cschool.MT_NewRegistrations_Tab1
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/MT_Service_Tab.csv'
INTO TABLE cschool.MT_Service_Tab
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/ParentCode_Tab.csv'
INTO TABLE cschool.ParentCode_Tab
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/Parent_Tab.csv'
INTO TABLE cschool.Parent_Tab
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/Rate_Tab.csv'
INTO TABLE cschool.Rate_Tab
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/Salary_Tab.csv'
INTO TABLE cschool.Salary_Tab
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/SortCode_Tab.csv'
INTO TABLE cschool.SortCode_Tab
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/Staff_Tab.csv'
INTO TABLE cschool.Staff_Tab
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '~/Documents/prj/CACC/csdDatabase/Student_Tab.csv'
INTO TABLE cschool.Student_Tab
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';

SET SQL_SAFE_UPDATES = 0;

