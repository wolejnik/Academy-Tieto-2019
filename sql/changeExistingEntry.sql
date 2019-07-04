USE [WeatherDB]
GO

UPDATE [dbo].[Weather]
   SET [Temp. (C)] = 42
      ,[Temp.(F)] = 107

 WHERE Date = '2019-07-06'
GO


