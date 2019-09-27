/*CREACIÓN DE LA BASE DE DATOS*/
/*--------------------------------------------------------------------------------------------------------------------------------------------*/
USE master
GO

DROP DATABASE FarmaTEC
GO

CREATE database FarmaTEC
GO
	
USE FarmaTEC
GO

/*CREACIÓN DE TABLAS*/
/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*TABLA EMPLEADOS*/
CREATE TABLE [Employee](
	Emp_ID				INT				NOT NULL	PRIMARY KEY,
	Emp_First_Name		VARCHAR(25)		NOT NULL,
	Emp_Last_Name_1		VARCHAR(25)		NOT NULL,
	Emp_Last_Name_2		VARCHAR(25)		NOT NULL,
	Emp_User_Access		INT				NOT NULL,
	Emp_Username		VARCHAR(25)		NOT NULL,
	Emp_Password		VARCHAR(25)		NOT NULL
	);
GO

/*TABLA CLIENT*/
CREATE TABLE [Client]	(
	Cl_ID				INT				NOT NULL	PRIMARY KEY,
	Cl_First_Name		VARCHAR(20)		NOT NULL,
	Cl_Last_Name_1		VARCHAR(20)		NOT NULL,
	Cl_Last_Name_2		VARCHAR(20)		NOT NULL,
	Cl_AccountID		INT				NOT NULL,
	Cl_Phone_Number		INT				NOT NULL,
	Cl_Type				VARCHAR(10)		NOT NULL,
	Cl_City				VARCHAR(9)		NOT NULL,
	Cl_User_Access		INT				DEFAULT 3,
	Cl_Username			VARCHAR(25)		NOT NULL,
	Cl_Password			VARCHAR(25)		NOT NULL
	);
GO

/*TABLA SCHEDULE*/
CREATE TABLE [Schedule] (
	Sc_ID				INT				NOT NULL	PRIMARY KEY		IDENTITY(1,1),
	Sc_Open_Hour		TIME			NOT NULL,
	Sc_Close_Hour		TIME			NOT NULL
	);
GO

/*TABLA PHARMACY*/
CREATE TABLE [Pharmacy] (
	Ph_Legal_ID			INT				NOT NULL	PRIMARY KEY,
	Ph_Name				VARCHAR(50)		NOT NULL,
	Ph_City				VARCHAR(9)		NOT NULL,
	Ph_Location			VARCHAR(50)		NOT NULL,
	Ph_Phone_Number		INT				NOT NULL,
	Ph_Email			VARCHAR(50)		NOT NULL,
	Ph_Schedule_ID		INT				NOT NULL	FOREIGN KEY		REFERENCES [Schedule](Sc_ID),
	Ph_Admin_ID			INT				NOT NULL	FOREIGN KEY		REFERENCES [Employee](Emp_ID),
	);
GO
ALTER TABLE [Employee] 
ADD 
	Ph_ID				INT							FOREIGN KEY		REFERENCES [Pharmacy](Ph_Legal_ID)
GO
ALTER TABLE [Schedule]
ADD 
	Ph_ID				INT				NOT NULL	FOREIGN KEY		REFERENCES [Pharmacy](Ph_Legal_ID)
GO

/*TABLA PRODUCT*/
CREATE TABLE [Product] (
	Pd_ID				INT				NOT NULL	PRIMARY KEY		IDENTITY(1,1),
	Pd_Name				VARCHAR(20)		NOT NULL,
	Pd_Brand			VARCHAR(20)		NOT NULL,
	Pd_Type				VARCHAR(10)		NOT NULL,
	Pd_Description		VARCHAR(50)		NOT NULL,
	Pd_Kid_Dose			VARCHAR(50)		NOT NULL,	
	Pd_Adult_Dose		VARCHAR(50)		NOT NULL,
	Pd_Side_Effects		VARCHAR(50)		NOT NULL,
	Pd_Picture_ID		VARCHAR(50)		NOT NULL,	
	Pd_Price			FLOAT			NOT NULL,
	Pd_Stock			INT				NOT NULL
	);
GO

/*TABLA ORDER TOTAL*/
CREATE TABLE [Order] (
	Or_ID				INT				NOT NULL	PRIMARY KEY		IDENTITY(1,1),
	Or_Date				DATE			NOT NULL,
	Or_Client_ID		INT				NOT NULL	FOREIGN KEY		REFERENCES [Client](Cl_ID),
	Or_State			VARCHAR(9)		NOT NULL,
	Or_Type				VARCHAR(10)		NOT NULL,
	Or_Pharmacy_ID		INT				NOT NULL	FOREIGN KEY		REFERENCES [Pharmacy](Ph_Legal_ID),
	Pd_ID				INT				NOT NULL	FOREIGN KEY		REFERENCES [Product](Pd_ID),
	Pd_Quantity			INT				NOT NULL,
	Price				FLOAT			NOT NULL
	);	
GO