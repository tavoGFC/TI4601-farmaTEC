/*CREACIÓN DE STORED PROCEDURES*/
USE FarmaTEC
GO

/*PROCEDIMIENTOS CRUD*/

/*CREATE*/
/*Añadir empleado*/
CREATE PROCEDURE sp_Add_Employee
  (
  @id				INT,
  @first_name		VARCHAR(25),
  @last_name1		VARCHAR(25),
  @last_name2		VARCHAR(25),
  @user_access	INT,
  @password		VARCHAR(25)
)
AS
BEGIN
  INSERT INTO [Employee]
    (Emp_ID, Emp_First_Name, Emp_Last_Name_1, Emp_Last_Name_2, Emp_User_Access, Emp_Password)
  VALUES
    (@ID, @first_name, @last_name1, @last_name2, @user_access, @password)
END
GO

/*Añadir cliente*/
CREATE PROCEDURE sp_Add_Client
  (
  @id				INT,
  @first_name		VARCHAR(25),
  @last_name1		VARCHAR(25),
  @last_name2		VARCHAR(25),
  @account_id		INT,
  @phone_number	INT,
  @type			VARCHAR(10),
  @city			VARCHAR(9),
  @password		VARCHAR(25)
)
AS
BEGIN
  INSERT INTO [Client]
    (Cl_ID, Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2, Cl_Account_ID, Cl_Phone_Number, Cl_Type, Cl_City, Cl_Password)
  VALUES
    (@id, @first_name, @last_name1, @last_name2, @account_id, @phone_number, @type, @city, @password)
END
GO

/*Añadir horario*/
CREATE PROCEDURE sp_Add_Schedule
  (
  @open_hour		TIME,
  @close_hour		TIME
)
AS
BEGIN
  INSERT INTO [Schedule]
    (Sc_Open_Hour, Sc_Close_Hour)
  VALUES
    (@open_hour, @close_hour)
END
GO

/*Añadir farmacia*/
CREATE PROCEDURE sp_Add_Pharmacy
  (
  @id				INT,
  @name			VARCHAR(50),
  @city			VARCHAR(9),
  @phone_number	INT,
  @schedule_id	INT,
  @admin_id		INT
)
AS
BEGIN
  INSERT INTO [Pharmacy]
    (Ph_Legal_ID, Ph_Name, Ph_City, Ph_Phone_Number, Ph_Schedule_ID, Ph_Admin_ID)
  VALUES
    (@id, @name, @city, @phone_number, @schedule_id, @admin_id)
END
GO

/*Añadir producto*/
CREATE PROCEDURE sp_Add_Product
  (
  @id				INT,
  @name			VARCHAR(50),
  @brand			VARCHAR(50),
  @type			VARCHAR(50),
  @description	VARCHAR(100),
  @kid_dose		VARCHAR(100),
  @adult_dose		VARCHAR(100),
  @side_effects	VARCHAR(50),
  @picture_id		VARCHAR(MAX),
  @price			FLOAT,
  @stock			INT
)
AS
BEGIN
  INSERT INTO [Product]
    (Pd_ID, Pd_Name, Pd_Brand, Pd_Type, Pd_Description, Pd_Kid_Dose, Pd_Adult_Dose, Pd_Side_Effects, Pd_Picture_ID, Pd_Price, Pd_Stock)
  VALUES
    (@id, @name, @brand, @type, @description, @kid_dose, @adult_dose, @side_effects, @picture_id, @price, @stock)
END
GO

/*Añadir orden*/
CREATE PROCEDURE sp_Add_Order
  (
  @id				INT,
  @date			DATE,
  @client_id		INT,
  @state			VARCHAR(9),
  @type			VARCHAR(10),
  @pharmacy_id	INT,
  @product_id		INT,
  @quantity		INT,
  @price			FLOAT
)
AS
BEGIN
  INSERT INTO [Order]
    (Or_ID, Or_Date, Or_Client_ID, Or_State, Or_Type, Or_Pharmacy_ID, Pd_ID, Pd_Quantity, Price)
  VALUES
    (@id, @date, @client_id, @state, @type, @pharmacy_id, @product_id, @quantity, @price)
END
GO

/*READ*/
/*Consultar Empleados*/

/*Consultar por ID*/
CREATE PROCEDURE sp_Get_Employee_ID
  @id				INT
AS
BEGIN
  SELECT *
  FROM [Employee]
  WHERE Emp_ID = @id
END
GO

/*Consultar por Nombre*/
CREATE PROCEDURE sp_Get_Employee_Name
  @name			VARCHAR(25)
AS
BEGIN
  SELECT *
  FROM [Employee]
  WHERE Emp_First_Name = @name
END
GO

/*Consultar por Primer Apellido*/
CREATE PROCEDURE sp_Get_Employee_Last_Name_1
  @last_name			VARCHAR(25)
AS
BEGIN
  SELECT *
  FROM [Employee]
  WHERE Emp_Last_Name_1 = @last_name
END
GO

/*Consultar por Segundo Apellido*/
CREATE PROCEDURE sp_Get_Employee_Last_Name_2
  @last_name			VARCHAR(25)
AS
BEGIN
  SELECT *
  FROM [Employee]
  WHERE Emp_Last_Name_2 = @last_name
END
GO

/*Consultar por Contraseña*/
CREATE PROCEDURE sp_Get_Employee_Password
  @pass				VARCHAR(25)
AS
BEGIN
  SELECT *
  FROM [Employee]
  WHERE Emp_Password = @pass
END
GO

/*Consultar Cliente*/

/*Consultar por ID*/
CREATE PROCEDURE sp_Get_Client_ID
  @id				INT
AS
BEGIN
  SELECT *
  FROM [Client]
  WHERE Cl_ID = @id
END
GO

/*Consultar por Nombre*/
CREATE PROCEDURE sp_Get_Client_Name
  @name			VARCHAR(20)
AS
BEGIN
  SELECT *
  FROM [Client]
  WHERE Cl_First_Name = @name
END
GO

/*Consultar por Primer Apellido*/
CREATE PROCEDURE sp_Get_Client_Last_Name_1
  @last_name			VARCHAR(25)
AS
BEGIN
  SELECT *
  FROM [Client]
  WHERE Cl_Last_Name_1 = @last_name
END
GO

/*Consultar por Segundo Apellido*/
CREATE PROCEDURE sp_Get_Client_Last_Name_2
  @last_name			VARCHAR(25)
AS
BEGIN
  SELECT *
  FROM [Client]
  WHERE Cl_Last_Name_2 = @last_name
END
GO

/*Consultar por ID de cuenta*/
CREATE PROCEDURE sp_Get_Client_Account_ID
  @account_id			INT
AS
BEGIN
  SELECT *
  FROM [Client]
  WHERE Cl_Account_ID = @account_id
END
GO

/*Consultar por Número de Teléfono*/
CREATE PROCEDURE sp_Get_Client_Phone_Number
  @phone_number		INT
AS
BEGIN
  SELECT *
  FROM [Client]
  WHERE Cl_Phone_Number = @phone_number
END
GO

/*Consultar por Tipo de cliente*/
CREATE PROCEDURE sp_Get_Client_Type
  @type				VARCHAR(10)
AS
BEGIN
  SELECT *
  FROM [Client]
  WHERE Cl_Type = @type
END
GO

/*Consultar por Segundo Apellido*/
CREATE PROCEDURE sp_Get_Client_City
  @city		VARCHAR(25)
AS
BEGIN
  SELECT *
  FROM [Client]
  WHERE Cl_City = @city
END
GO

/*Consultar por Contraseña*/
CREATE PROCEDURE sp_Get_Client_Password
  @pass				VARCHAR(25)
AS
BEGIN
  SELECT *
  FROM [Client]
  WHERE Cl_Password = @pass
END
GO

/*Consultar Horario*/

/*Consultar por ID*/
CREATE PROCEDURE sp_Get_Schedule_ID
  @id					INT
AS
BEGIN
  SELECT *
  FROM [Schedule]
  WHERE Sc_ID = @id
END
GO

/*Consultar por Hora de apertura*/
CREATE PROCEDURE sp_Get_Schedule_Open
  @open				TIME
AS
BEGIN
  SELECT *
  FROM [Schedule]
  WHERE Sc_Open_Hour = @open
END
GO

/*Consultar por Hora de apertura*/
CREATE PROCEDURE sp_Get_Schedule_Close
  @close				TIME
AS
BEGIN
  SELECT *
  FROM [Schedule]
  WHERE Sc_Close_Hour = @close
END
GO

/*Consultar Farmacia*/

/*Consultar por ID*/
CREATE PROCEDURE sp_Get_Pharmacy_ID
  @id					INT
AS
BEGIN
  SELECT *
  FROM [Pharmacy]
  WHERE Ph_Legal_ID = @id
END
GO

/*Consultar por Mombre*/
CREATE PROCEDURE sp_Get_Pharmacy_Name
  @name				VARCHAR(50)
AS
BEGIN
  SELECT *
  FROM [Pharmacy]
  WHERE Ph_Name = @name
END
GO

/*Consultar por Ciudad*/
CREATE PROCEDURE sp_Get_Pharmacy_City
  @city				VARCHAR(9)
AS
BEGIN
  SELECT *
  FROM [Pharmacy]
  WHERE Ph_City = @city
END
GO

/*Consultar por Número de teléfono*/
CREATE PROCEDURE sp_Get_Pharmacy_Phone_Number
  @phone_number		INT
AS
BEGIN
  SELECT *
  FROM [Pharmacy]
  WHERE Ph_Phone_Number = @phone_number
END
GO

/*Consultar por Horario*/
CREATE PROCEDURE sp_Get_Pharmacy_Schedule_ID
  @schedule_id		INT
AS
BEGIN
  SELECT *
  FROM [Pharmacy]
  WHERE Ph_Schedule_ID = @schedule_id
END
GO

/*Consultar por Administrador*/
CREATE PROCEDURE sp_Get_Pharmacy_Admin_ID
  @admin_ID			INT
AS
BEGIN
  SELECT *
  FROM [Pharmacy]
  WHERE Ph_Admin_ID = @admin_ID
END
GO

/*Consultar Producto*/

/*Consultar por ID*/
CREATE PROCEDURE sp_Get_Product_ID
  @id					INT
AS
BEGIN
  SELECT *
  FROM [Product]
  WHERE Pd_ID = @id
END
GO

/*Consultar por Nombre*/
CREATE PROCEDURE sp_Get_Product_Name
  @name				VARCHAR(50)
AS
BEGIN
  SELECT *
  FROM [Product]
  WHERE Pd_Name = @name
END
GO

/*Consultar por Marca*/
CREATE PROCEDURE sp_Get_Product_Brand
  @brand				VARCHAR(50)
AS
BEGIN
  SELECT *
  FROM [Product]
  WHERE Pd_Brand = @brand
END
GO

/*Consultar por Tipo*/
CREATE PROCEDURE sp_Get_Product_Type
  @type				VARCHAR(50)
AS
BEGIN
  SELECT *
  FROM [Product]
  WHERE Pd_Type = @type
END
GO

/*Consultar por Descripción*/
CREATE PROCEDURE sp_Get_Product_Description
  @description		VARCHAR(100)
AS
BEGIN
  SELECT *
  FROM [Product]
  WHERE Pd_Description = @description
END
GO

/*Consultar por Dosis niño*/
CREATE PROCEDURE sp_Get_Product_Kid_Dose
  @kid_dose			VARCHAR(100)
AS
BEGIN
  SELECT *
  FROM [Product]
  WHERE Pd_Kid_Dose = @kid_dose
END
GO

/*Consultar por Dosis adulto*/
CREATE PROCEDURE sp_Get_Product_Adult_Dose
  @adult_dose 		VARCHAR(100)
AS
BEGIN
  SELECT *
  FROM [Product]
  WHERE Pd_Adult_Dose = @adult_dose
END
GO

/*Consultar por Efectos secundarios*/
CREATE PROCEDURE sp_Get_Product_Side_Effects
  @side_effects		VARCHAR(50)
AS
BEGIN
  SELECT *
  FROM [Product]
  WHERE Pd_Side_Effects = @side_effects
END
GO

/*Consultar por Precio*/
CREATE PROCEDURE sp_Get_Product_Price
  @price				FLOAT
AS
BEGIN
  SELECT *
  FROM [Product]
  WHERE Pd_Price = @price
END
GO

/*Consultar Orden*/

/*Consultar por ID*/
CREATE PROCEDURE sp_Get_Order_ID
  @id					INT
AS
BEGIN
  SELECT *
  FROM [Order]
  WHERE Or_ID = @id
END
GO

/*Consultar por Fecha*/
CREATE PROCEDURE sp_Get_Order_Date
  @date				DATE
AS
BEGIN
  SELECT *
  FROM [Order]
  WHERE Or_Date = @date
END
GO

/*Consultar por ID de cliente*/
CREATE PROCEDURE sp_Get_Order_Client_ID
  @client_id			INT
AS
BEGIN
  SELECT *
  FROM [Order]
  WHERE Or_Client_ID = @client_id
END
GO

/*Consultar por Estado*/
CREATE PROCEDURE sp_Get_Order_State
  @state				VARCHAR(9)
AS
BEGIN
  SELECT *
  FROM [Order]
  WHERE Or_State = @state
END
GO

/*Consultar por Tipo*/
CREATE PROCEDURE sp_Get_Order_Type
  @type				VARCHAR(10)
AS
BEGIN
  SELECT *
  FROM [Order]
  WHERE Or_Type = @type
END
GO

/*Consultar por ID de farmacia*/
CREATE PROCEDURE sp_Get_Order_Pharmacy_ID
  @id					INT
AS
BEGIN
  SELECT *
  FROM [Order]
  WHERE Or_Pharmacy_ID = @id
END
GO

/*Consultar por ID de producto*/
CREATE PROCEDURE sp_Get_Order_Product_ID
  @id					INT
AS
BEGIN
  SELECT *
  FROM [Order]
  WHERE Pd_ID = @id
END
GO

/*Consultar por Precio*/
CREATE PROCEDURE sp_Get_Order_Price
  @price					INT
AS
BEGIN
  SELECT *
  FROM [Order]
  WHERE Price = @price
END
GO

/*UPDATE*/
/*Modificar empleado*/
CREATE PROCEDURE sp_Update_Employee
  (
  @id				INT,
  @first_name		VARCHAR(25),
  @last_name1		VARCHAR(25),
  @last_name2		VARCHAR(25),
  @password		VARCHAR(25)
)
AS
BEGIN
  UPDATE [Employee] 
	SET 
		Emp_First_Name = @first_name, Emp_Last_Name_1 = @last_name1, Emp_Last_Name_2 = @last_name2, Emp_Password = Emp_Password
	WHERE Emp_ID = @id
END
GO

/*Modificar cliente*/
CREATE PROCEDURE sp_Update_Client
  (
  @id				INT,
  @first_name		VARCHAR(25),
  @last_name1		VARCHAR(25),
  @last_name2		VARCHAR(25),
  @account_id		INT,
  @phone_number	INT,
  @type			VARCHAR(10),
  @city			VARCHAR(9),
  @password		VARCHAR(25)
)
AS
BEGIN
  UPDATE [Client]
	SET
		Cl_First_Name = @first_name, Cl_Last_Name_1 = @last_name1, Cl_Last_Name_2 = Cl_Last_Name_2, Cl_Account_ID = @account_id, Cl_Phone_Number = @phone_number, Cl_Type = @type, Cl_City = @city, Cl_Password = @password
	WHERE Cl_ID = @id
END
GO

/*Modificar horario*/
CREATE PROCEDURE sp_Update_Schedule
  (
  @id				INT,
  @open_hour		TIME,
  @close_hour		TIME
)
AS
BEGIN
  UPDATE [Schedule]
	SET
		Sc_Open_Hour = @open_hour, Sc_Close_Hour = @close_hour
	WHERE Sc_ID = @id
END
GO

/*Modificar farmacia*/
CREATE PROCEDURE sp_Update_Pharmacy
  (
  @id				INT,
  @name			VARCHAR(50),
  @city			VARCHAR(9),
  @phone_number	INT,
  @schedule_id	INT,
  @admin_id		INT
)
AS
BEGIN
  UPDATE [Pharmacy]
	SET	
		Ph_Name = @name, Ph_City = @city, Ph_Phone_Number = @phone_number, Ph_Schedule_ID = @schedule_id, Ph_Admin_ID = @admin_id
	WHERE Ph_Legal_ID = @id
END
GO

/*Modificar producto*/
CREATE PROCEDURE sp_Update_Product
  (
  @id				INT,
  @name			VARCHAR(50),
  @brand			VARCHAR(50),
  @type			VARCHAR(50),
  @description	VARCHAR(100),
  @kid_dose		VARCHAR(100),
  @adult_dose		VARCHAR(100),
  @side_effects	VARCHAR(50),
  @picture_id		VARCHAR(MAX),
  @price			FLOAT,
  @stock			INT
)
AS
BEGIN
  UPDATE [Product]
	SET 
		Pd_Name = @name, Pd_Brand = @brand, Pd_Type = @type, Pd_Description = @description, Pd_Kid_Dose = @kid_dose, Pd_Adult_Dose = @adult_dose, Pd_Side_Effects = @side_effects, Pd_Picture_ID = @picture_id, Pd_Price = @price, Pd_Stock = @stock
	WHERE Pd_ID = @id
END
GO

/*Modificar orden*/
CREATE PROCEDURE sp_Update_Order
  (
  @id				INT,
  @state			VARCHAR(9)
)
AS
BEGIN
  UPDATE [Order]
	SET 
		Or_State = @state
	WHERE Or_ID = @id
END
GO

/*DELETE*/
/*Eliminar Empleado*/
CREATE PROCEDURE sp_Delete_Employee
  @id				INT
AS
BEGIN
  DELETE [Employee] 
	WHERE Emp_ID = @id
END
GO

/*Eliminar Cliente*/
CREATE PROCEDURE sp_Delete_Client
  @id				INT
AS
BEGIN
  DELETE [Client] 
	WHERE Cl_ID = @id
END
GO

/*Eliminar Horario*/
CREATE PROCEDURE sp_Delete_Schedule
  @id				INT
AS
BEGIN
  DELETE [Schedule] 
	WHERE Sc_ID = @id
END
GO

/*Eliminar Farmacia*/
CREATE PROCEDURE sp_Delete_Pharmacy
  @id				INT
AS
BEGIN
  DELETE [Pharmacy] 
	WHERE Ph_Legal_ID = @id
END
GO

/*Eliminar Producto*/
CREATE PROCEDURE sp_Delete_Product
  @id				INT
AS
BEGIN
  DELETE [Product] 
	WHERE Pd_ID = @id
END
GO

/*Eliminar Orden*/
CREATE PROCEDURE sp_Delete_Order
  @id				INT
AS
BEGIN
  DELETE [Order] 
	WHERE Or_ID = @id
END
GO

/*---------------------------------------------------------------------------------------------------------------------------------------------------*/
/*CONSULTAS ESPECÍFICAS PARA ADMINISTRADORES DE SAN JOSÉ Y CARTAGO*/

/*CANTIDAD DE DINERO RECAUDADO EN SUCURSAL*/
/*Estado: Funciona*/
CREATE PROCEDURE usp_Get_Raised_Money
  @Pharmacy_ID INT
AS
SELECT SUM(Price)
FROM [Order]
WHERE Or_State = 'Entregado' AND Or_Pharmacy_ID = @Pharmacy_ID
GO

/*Estado: Funciona*/
/*CANTIDAD DE PEDIDOS POR CLIENTE PARA RANGO DE FECHAS ESPECÍFICO*/
CREATE PROCEDURE usp_Get_Client_Orders
  @In_Date DATE,
  @Out_Date DATE
AS
SELECT Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2, Or_ID, Price
FROM [Client] INNER JOIN [Order] ON Or_Client_ID = Cl_ID
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GO

/*MONTO PROMEDIO PAGADO POR PEDIDO POR CLIENTE PARA RANGO DE FECHAS ESPECÍFICO*/
/*Estado: Funciona*/
CREATE PROCEDURE usp_Get_Average_Payment
  @In_Date DATE,
  @Out_Date DATE
AS
SELECT Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2, AVG(ALL Price) AS [Average_Payment]
FROM [Client] FULL OUTER JOIN [Order] ON Or_Client_ID = Cl_ID
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2
GO

/*MONTO PEDIDO PARA TIPO DE PEDIDO PARA UN MES PARTICULAR*/
/*Estado: Funciona*/
CREATE PROCEDURE usp_Get_Month_Order_Type_Payment
  @Type VARCHAR(10),
  @Month VARCHAR(2)
AS
SELECT SUM(Price)
FROM [Order]
WHERE Or_Type = @Type AND MONTH(Or_Date) = @Month
GO

/*CONSULTAS PARA GERENTE EN OFICINAS CENTRALES*/

/*MONTO RECAUDADO POR SUCURSAL POR PERÍODO*/
/*Estado: Funciona*/
CREATE PROCEDURE usp_Get_Branch_Raised_Money
  @In_Date DATE,
  @Out_Date DATE
AS
SELECT Or_Pharmacy_ID, SUM(Price)
FROM [Order]
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Or_Pharmacy_ID
GO

/*MONTO RECAUDADO POR SUCURSAL Y TIPO POR PERÍODO*/
/*Estado: Funciona*/
CREATE PROCEDURE usp_Get_Branch_Type_Raised_Money
  @In_Date DATE,
  @Out_Date DATE
AS
SELECT Or_Pharmacy_ID, Or_Type, SUM(Price)
FROM [Order]
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Or_Pharmacy_ID, Or_Type
GO

/*TRES MEJORES CLIENTES*/
/*Estado:Funciona*/
CREATE PROCEDURE usp_Get_Top_Three_Clients
  @In_Date DATE,
  @Out_Date DATE
AS
SELECT TOP 3
  Cl_ID, Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2, SUM(Price) AS [Price_Sum]
FROM [Client] INNER JOIN [Order] ON Or_Client_ID = Cl_ID
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Cl_ID, Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2
ORDER BY SUM(Price) DESC
GO