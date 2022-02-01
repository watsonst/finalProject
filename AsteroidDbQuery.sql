--create database AsteroidDb

drop table if exists Quotes

create table Quotes(
	Percentage int primary key not null,
	Quote nvarchar(500) not null,
	Recommendation nvarchar(500) not null
)

drop table if exists FanFavorites

create table FanFavorites(
	ID int primary key identity(1,1),
	Date nvarchar(20),
	Percentage int foreign key references dbo.Quotes(Percentage),
	Counter int
)

insert into Quotes(Percentage, Quote, Recommendation)
values('10', 'Test Quote', 'Test Recommendation');

insert into Quotes(Percentage, Quote, Recommendation)
values('20', 'Test two', 'Test rec two')

insert into Quotes(Percentage, Quote, Recommendation)
values('30', 'Test three', 'Test rec three')
insert into Quotes(Percentage, Quote, Recommendation)
values('40', 'Test four', 'Test rec four')
insert into Quotes(Percentage, Quote, Recommendation)
values('50', 'Test five', 'Test rec five')
insert into Quotes(Percentage, Quote, Recommendation)
values('60', 'Test six', 'Test rec six')
insert into Quotes(Percentage, Quote, Recommendation)
values('70', 'Test seven', 'Test rec seven')
insert into Quotes(Percentage, Quote, Recommendation)
values('80', 'Test eight', 'Test rec eight')
insert into Quotes(Percentage, Quote, Recommendation)
values('90', 'Test nine', 'Test rec nine')
insert into Quotes(Percentage, Quote, Recommendation)
values('100', 'Test ten', 'Test rec ten')

select * from Quotes

select * from FanFavorites

insert into FanFavorites(Date,Percentage,counter)
values
('2022-01-18', '100', '1'),
('2022-01-26', '40', '2'),
('1991-04-15', '20', '3');