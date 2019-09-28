/*CREACIÓN DE STORED PROCEDURES*/
/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*CONSULTAS PARA ADMINISTRADORES DE SAN JOSÉ Y CARTAGO*/

/*CANTIDAD DE DINERO RECAUDADO EN SUCURSAL*/
CREATE PROCEDURE sp_Get_Raised_Money @City VARCHAR(9)
AS
SELECT SUM(Total_Price) 
FROM Order_Total
WHERE Or_State = 'Entregado' AND Or_Pharmacy = @City
GO

/*CANTIDAD DE PEDIDOS POR CLIENTE PARA RANGO DE FECHAS ESPECÍFICO*/
CREATE PROCEDURE sp_Get_Client_Orders @In_Date DATE, @Out_Date DATE
AS
SELECT Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2, Or_ID, Total_Price
FROM Client INNER JOIN Order_Total ON Or_Client_ID = Cl_ID
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Cl_ID
GO

/*MONTO PROMEDIO PAGADO POR PEDIDO POR CLIENTE PARA RANGO DE FECHAS ESPECÍFICO*/
CREATE PROCEDURE sp_Get_Average_Payment @In_Date DATE, @Out_Date DATE
AS
SELECT Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2, AVG(ALL Total_Price)
FROM Client INNER JOIN Order_Total ON Or_Client_ID = Cl_ID
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Cl_ID
GO

/*MONTO PEDIDO PARA TIPO DE PEDIDO PARA UN MES PARTICULAR*/
CREATE PROCEDURE sp_Get_Month_Order_Type_Payment @Type VARCHAR(10), @Month VARCHAR(2)
AS
SELECT SUM(Total_Price)
FROM Order_Total
WHERE Or_Type = @Type AND MONTH(Or_Date) = @Month
GO

/*CONSULTAS PARA GERENTE EN OFICINAS CENTRALES*/

/*MONTO RECAUDADO POR SUCURSAL POR PERÍODO*/
CREATE PROCEDURE sp_Get_Branch_Raised_Money @In_Date DATE, @Out_Date DATE
AS
SELECT Or_Pharmacy, SUM(Total_Price) 
FROM Order_Total
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Or_Pharmacy
GO

/*MONTO RECAUDADO POR SUCURSAL Y TIPO POR PERÍODO*/
CREATE PROCEDURE sp_Get_Branch_Type_Raised_Money @In_Date DATE, @Out_Date DATE
AS
SELECT Or_Pharmacy, Or_Type, SUM(Total_Price)
FROM Order_Total
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
GROUP BY Or_Pharmacy
GO

/*TRES MEJORES CLIENTES*/
CREATE PROCEDURE sp_Get_Top_Three_Clients @In_Date DATE, @Out_Date DATE
AS
SELECT TOP 3 Cl_ID, Cl_First_Name, Cl_Last_Name_1, Cl_Last_Name_2, SUM(Total_Price)
FROM Client INNER JOIN Order_Total ON Or_Client_ID = Cl_ID
WHERE Or_Date BETWEEN @In_Date AND @Out_Date
ORDER BY SUM(Total_Price)
GO