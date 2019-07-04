USE [WeatherDB]
GO

/****** Object:  Table [dbo].[Weather]    Script Date: 04.07.2019 21:26:11 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Weather](
	[ID_Weather] [int] IDENTITY(1,1) NOT NULL,
	[Date] [date] NOT NULL,
	[Temp. (C)] [int] NOT NULL,
	[Temp.(F)] [int] NOT NULL,
	[Summary] [nvarchar](50) NOT NULL
) ON [PRIMARY]
GO


