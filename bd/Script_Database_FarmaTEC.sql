USE [master]
GO

/****** Object:  Database [farmatec]    Script Date: 9/10/2019 01:17:04 ******/
DROP DATABASE [farmatec]
GO

/****** Object:  Database [farmatec]    Script Date: 9/10/2019 01:17:04 ******/
CREATE DATABASE [farmatec]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'farmatec', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\farmatec.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'farmatec_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\farmatec_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO


IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
    EXEC [farmatec].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [farmatec] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [farmatec] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [farmatec] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [farmatec] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [farmatec] SET ARITHABORT OFF 
GO

ALTER DATABASE [farmatec] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [farmatec] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [farmatec] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [farmatec] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [farmatec] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [farmatec] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [farmatec] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [farmatec] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [farmatec] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [farmatec] SET  DISABLE_BROKER 
GO

ALTER DATABASE [farmatec] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [farmatec] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [farmatec] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [farmatec] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [farmatec] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [farmatec] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [farmatec] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [farmatec] SET RECOVERY FULL 
GO

ALTER DATABASE [farmatec] SET  MULTI_USER 
GO

ALTER DATABASE [farmatec] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [farmatec] SET DB_CHAINING OFF 
GO

ALTER DATABASE [farmatec] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [farmatec] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [farmatec] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [farmatec] SET QUERY_STORE = OFF
GO

ALTER DATABASE [farmatec] SET  READ_WRITE 
GO


USE [farmatec]
GO

/****** Object:  Table [dbo].[Management]    Script Date: 9/9/2019 23:01:17 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


--[Management]--
CREATE TABLE [dbo].[Management]
(
    [Management_Id] [int] IDENTITY(1,1) NOT NULL,
    [First_Name] [varchar](50) NOT NULL,
    [Last_Name] [varchar](50) NOT NULL,
    [Place] [varchar](120) NOT NULL,
    CONSTRAINT [PK_Management] PRIMARY KEY CLUSTERED ( [Management_Id] ASC )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--Pharmacy--
CREATE TABLE [dbo].[Pharmacy]
(
    [Pharmacy_Id] [int] IDENTITY(1,1) NOT NULL,
    [Name] [varchar](50) NOT NULL,
    [Legal_Id] [varchar](50) NOT NULL,
    [Location] [varchar](120) NOT NULL,
    [Contact_Info] [varchar](120) NOT NULL,
    [Admin_Info] [varchar](90) NOT NULL,
    CONSTRAINT [PK_Pharmacy] PRIMARY KEY CLUSTERED ( [Pharmacy_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--Schedule Pharmacy--
CREATE TABLE [dbo].[Schedule]
(
    [Schedule_Id] [int] IDENTITY(1,1) NOT NULL,
    [Open_Hour] [time] NOT NULL,
    [Close_Hour] [time] NOT NULL,
    [Day] [varchar](120) NOT NULL,
    CONSTRAINT [PK_Schedule] PRIMARY KEY CLUSTERED ( [Schedule_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--Pharmacy|X|Schedule--
CREATE TABLE dbo.Pharmacy_Schedule
(
    Pharmacy_Schedule_Id int IDENTITY(1,1) NOT NULL,
    Pharmacy_Id int NOT NULL,
    Schedule_Id int NOT NULL,
    CONSTRAINT [PK_P_S] PRIMARY KEY CLUSTERED (Pharmacy_Schedule_Id ASC) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
    CONSTRAINT FK_Pharmacy_Id FOREIGN KEY ( Pharmacy_Id ) REFERENCES [dbo].[Pharmacy] (Pharmacy_Id)
)ON [PRIMARY]
GO
ALTER TABLE dbo.Pharmacy_Schedule ADD CONSTRAINT
	FK_Schedule_Id FOREIGN KEY (Schedule_Id) REFERENCES dbo.Schedule
	(Schedule_Id) ON UPDATE  NO ACTION  ON DELETE  NO ACTION
GO

--Product Type--
CREATE TABLE [dbo].[Product_Type]
(
    [Type_Id] [int] IDENTITY(1,1) NOT NULL,
    [Type_Description] [varchar](300) NOT NULL,
    CONSTRAINT [PK_Product_Type] PRIMARY KEY CLUSTERED ( [Type_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--Product Side Effect--
CREATE TABLE [dbo].[Side_Effect]
(
    [Side_Effect_Id] [int] IDENTITY(1,1) NOT NULL,
    [SE_Description] [varchar](300) NOT NULL,
    CONSTRAINT [PK_Side_Effect] PRIMARY KEY CLUSTERED ( [Side_Effect_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--Product--
CREATE TABLE [dbo].[Product]
(
    [Product_Id] [int] IDENTITY(1,1) NOT NULL,
    [Product_Name] [varchar](50) NOT NULL,
    [Product_Brand] [varchar](50) NOT NULL,
    [Product_Description] [varchar](300) NOT NULL,
    [Product_Type_Id] [int] NOT NULL,
	[Kid_Dose] [varchar](50) NOT NULL,
    [Adult_Dose] [varchar](50) NOT NULL,
    /*[Photo] [image] NOT NULL,*/
    [Price] [float] NOT NULL,
    CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED ([Product_Id] ASC) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
    CONSTRAINT FK_Product_Type_Id FOREIGN KEY ( Product_Type_Id ) REFERENCES [dbo].[Product_Type] ([Type_Id])
) ON [PRIMARY]
GO

--Product |X| Side_Effect--
CREATE TABLE dbo.Medicament_SecondaryEffect
(
    Product_SideEffect_Id int IDENTITY(1,1) NOT NULL,
    Product_Id int NOT NULL,
    Side_Effect_Id int NOT NULL,
    CONSTRAINT [PK_P_SE] PRIMARY KEY CLUSTERED (Product_SideEffect_Id ASC) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
    CONSTRAINT FK_Medicament_Id FOREIGN KEY ( Product_Id ) REFERENCES [dbo].[Product] ([Product_Id]),
    CONSTRAINT FK_Side_Effect_Id FOREIGN KEY ( Side_Effect_Id ) REFERENCES [dbo].[Side_Effect] ([Side_Effect_Id])
)  
	ON [PRIMARY]
GO

--Inventory--
CREATE TABLE dbo.Inventory
(
    Inventory_Id int IDENTITY(1,1) NOT NULL,
    Medicament_Id int NOT NULL,
    Pharmacy_Id int NOT NULL,
    Quantity int NOT NULL,
    CONSTRAINT [PK_Inventory] PRIMARY KEY CLUSTERED (Inventory_Id ASC) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
    CONSTRAINT FK_Inventory_Medicament FOREIGN KEY ( Medicament_Id ) REFERENCES [dbo].[Product] ([Product_Id]),
    CONSTRAINT FK_Inventory_Pharmacy FOREIGN KEY ( Pharmacy_Id ) REFERENCES [dbo].[Pharmacy] (Pharmacy_Id)
)  
	ON [PRIMARY]
GO

--Client_Type--
CREATE TABLE [dbo].[Client_Type]
(
    [Type_Id] [int] IDENTITY(1,1) NOT NULL,
    [Type_Description] [varchar](300) NOT NULL,
    CONSTRAINT [PK_Client_Type] PRIMARY KEY CLUSTERED ( [Type_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--Province--
CREATE TABLE [dbo].[Province]
(
    [Province_Id] [int] IDENTITY(1,1) NOT NULL,
    [Province_Name][varchar](10) NOT NULL,
    CONSTRAINT [PK_Province] PRIMARY KEY CLUSTERED ( [Province_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--Client--
CREATE TABLE [dbo].[Client]
(
    [Client_Id] [int] IDENTITY(1,1) NOT NULL,
    [Ssn] [int] NOT NULL,
    [First_Name] [varchar](80) NOT NULL,
    [Last_Name] [varchar](80) NOT NULL,
    [Account_Number] [int] NOT NULL,
    [Phone] [int] NOT NULL,
    [Client_Type_Id] [int] NOT NULL,
    [Province_Id] [int] NOT NULL,
    CONSTRAINT [PK_Medicament_Type] PRIMARY KEY CLUSTERED ( [Client_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
    CONSTRAINT FK_Client_Client_Type FOREIGN KEY ( [Client_Type_Id] ) REFERENCES [dbo].[Client_Type] ([Type_Id]),
    CONSTRAINT FK_Client_Province FOREIGN KEY ( [Province_Id] ) REFERENCES [dbo].[Province] (Province_Id)
) ON [PRIMARY]
GO

--Order_State--
CREATE TABLE [dbo].[Order_State]
(
    [State_Id] [int] IDENTITY(1,1) NOT NULL,
    [Description] [varchar](300) NOT NULL,
    CONSTRAINT [PK_Client_Type] PRIMARY KEY CLUSTERED ( [State_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--Order_Type--
CREATE TABLE [dbo].[Order_Type]
(
    [Type_Id] [int] IDENTITY(1,1) NOT NULL,
    [Type_Description] [varchar](300) NOT NULL,
    CONSTRAINT [PK_Client_Type] PRIMARY KEY CLUSTERED ( [Type_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--Order--
CREATE TABLE [dbo].[Order]
(
    [Order_Id] [int] IDENTITY(1,1) NOT NULL,
    [Date] [date] NOT NULL,
    [Pharmacy_Id] [int] NOT NULL,
    [Client_Id] [int] NOT NULL,
    [Order_State_Id] [int] NOT NULL,
    [Order_Type_Id] [int] NOT NULL,
    CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED ( [Order_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
    CONSTRAINT FK_Order_Pharmacy FOREIGN KEY ( [Pharmacy_Id] ) REFERENCES [dbo].[Pharmacy] ([Pharmacy_Id]),
    CONSTRAINT FK_Order_Client FOREIGN KEY ( [Client_Id] ) REFERENCES [dbo].[Client] (Client_Id),
    CONSTRAINT FK_Order_State FOREIGN KEY ( [Order_State_Id] ) REFERENCES [dbo].[Order_State] ([State_Id]),
    CONSTRAINT FK_Order_Type FOREIGN KEY ( [Order_Type_Id] ) REFERENCES [dbo].[Order_Type] ([Type_Id])
) ON [PRIMARY]
GO


--Order_Detail--
CREATE TABLE [dbo].[Order_Detail]
(
    [Order_Detail_Id] [int] IDENTITY(1,1) NOT NULL,
    [Medicament_Quantity] [int] NOT NULL,
    [Total_Amount] [int] NOT NULL,
    [Order_Id] [int] NOT NULL,
    [Medicament_Id] [int] NOT NULL,
    CONSTRAINT [PK_Order_Detail] PRIMARY KEY CLUSTERED ( [Order_Detail_Id] ASC ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
    CONSTRAINT FK_Order FOREIGN KEY ( [Order_Id] ) REFERENCES [dbo].[Order] ([Order_Id]),
    CONSTRAINT FK_Order_Medicament FOREIGN KEY ( [Medicament_Id] ) REFERENCES [dbo].[Product] (Product_Id)
) ON [PRIMARY]
GO
