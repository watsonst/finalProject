--create database AsteroidDb

--drop table if exists Quotes

--create table Quotes(
--	Percentage int primary key not null,
--	Quote nvarchar(500) not null,
--	Recommendation nvarchar(500) not null
--)

--drop table if exists FanFavorites

--create table FanFavorites(
--	ID int primary key identity(1,1),
--	Date nvarchar(20),
--	Percentage int foreign key references dbo.Quotes(Percentage),
--	Counter int
--)

--insert into Quotes(Percentage, Quote, Recommendation)
--values('10', 'Test Quote', 'Test Recommendation');

--insert into Quotes(Percentage, Quote, Recommendation)
--values('20', 'Test two', 'Test three')

--select * from Quotes

--select * from FanFavorites