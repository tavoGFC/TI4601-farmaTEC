/*CREACIÓN DE STORED PROCEDURES*/
/*--------------------------------------------------------------------------------------------------------------------------------------------*/
USE master
GO
USE FarmaTEC
GO

/*CONSULTAS PARA ADMINISTRADORES DE SAN JOSÉ Y CARTAGO*/

/*CANTIDAD DE DINERO RECAUDADO EN SUCURSAL*/
/*Estado: Funciona*/
CREATE PROCEDURE usp_Get_Raised_Money @Pharmacy_ID INT
AS
SELECT SUM(Price) 
FROM [Order]
WHERE Or_State = 'Entregado' AND Or_Pharmacy_ID = @Pharmacy_ID
GO

/*Estado: No funciona*/
/*CANTIDAD DE PEDIDOS POR CLIENTE PARA RANGO DE FECHAS ESPECÍFICO*/
CREATE PROCEDURE usp_Get_Client_Orders @In_Date DATE, @Out_Date DATE
AS
SELECT Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2, Or_ID, Price
FROM [Client] FULL OUTER JOIN [Order] ON Or_Client_ID = Cl_ID
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Cl_ID
GO

/*MONTO PROMEDIO PAGADO POR PEDIDO POR CLIENTE PARA RANGO DE FECHAS ESPECÍFICO*/
/*Estado: No funciona*/
CREATE PROCEDURE usp_Get_Average_Payment @In_Date DATE, @Out_Date DATE
AS
SELECT Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2, AVG(ALL Price)
FROM [Client] INNER JOIN [Order] ON Or_Client_ID = Cl_ID
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Cl_ID
GO

/*MONTO PEDIDO PARA TIPO DE PEDIDO PARA UN MES PARTICULAR*/
/*Estado: Funciona*/
CREATE PROCEDURE usp_Get_Month_Order_Type_Payment @Type VARCHAR(10), @Month VARCHAR(2)
AS
SELECT SUM(Price)
FROM [Order]
WHERE Or_Type = @Type AND MONTH(Or_Date) = @Month
GO

/*CONSULTAS PARA GERENTE EN OFICINAS CENTRALES*/

/*MONTO RECAUDADO POR SUCURSAL POR PERÍODO*/
/*Estado: Funciona*/
CREATE PROCEDURE usp_Get_Branch_Raised_Money @In_Date DATE, @Out_Date DATE
AS
SELECT Or_Pharmacy_ID, SUM(Price) 
FROM [Order]
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Or_Pharmacy_ID
GO

/*MONTO RECAUDADO POR SUCURSAL Y TIPO POR PERÍODO*/
/*Estado: No Funciona*/
CREATE PROCEDURE usp_Get_Branch_Type_Raised_Money @In_Date DATE, @Out_Date DATE
AS
SELECT Or_Pharmacy_ID, Or_Type, SUM(Price)
FROM [Order]
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Or_Pharmacy_ID
GO

/*TRES MEJORES CLIENTES*/
/*Estado:No funciona*/
CREATE PROCEDURE usp_Get_Top_Three_Clients @In_Date DATE, @Out_Date DATE
AS
SELECT TOP 3 Cl_ID, Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2, SUM(Price)
FROM [Client] INNER JOIN [Order] ON Or_Client_ID = Cl_ID
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY SUM(Price)
GO	