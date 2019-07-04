USE [WeatherDB]
GO

SELECT [ID_Weather]
      ,[Date]
      ,[Temp. (C)]
      ,[Temp.(F)]
      ,[Summary]
  FROM [dbo].[Weather]
  WHERE Date = '2019-07-06'
GO


