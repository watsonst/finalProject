--create database AsteroidDb

drop table if exists Quotes

create table Quotes(
	Percentage int primary key not null,
	Quote nvarchar(500) not null,
	Recommendation nvarchar(500) not null
)

drop table if exists FanFavorites

create table FanFavorites(
	Id int primary key identity(1,1),
	Percentage int foreign key references Quotes,
	Counter int,
	Date nvarchar(20),
	Quote nvarchar(200),
	Recommendation nvarchar(200)
)

insert into FanFavorites(Percentage, Counter, Date, Quote, Recommendation)
values ('100', '1', '2022-02-06', 'test', 'test rec');



insert into Quotes(Percentage, Quote, Recommendation)
values('10', '', 'you should be ok, but keep in mind the chance is not 0');
insert into Quotes(Percentage, Quote, Recommendation)
values('20', '', 'eh why not ? You have made it this far.')
insert into Quotes(Percentage, Quote, Recommendation)
values('30', '', 'be sure to bring your standard equipment, military grade hard hat !')
insert into Quotes(Percentage, Quote, Recommendation)
values('40', '', 'just maybe keep your eyes to the sky so you can at least see it coming !')
insert into Quotes(Percentage, Quote, Recommendation)
values('50', '', 'make sure you take your umbrella !')
insert into Quotes(Percentage, Quote, Recommendation)
values('60', '', 'know you are living dangerously close to the edge.')
insert into Quotes(Percentage, Quote, Recommendation)
values('70', '', 'ask yourself, are these errands really worth it ?')
insert into Quotes(Percentage, Quote, Recommendation)
values('80', '', 'perhaps consider a lovely night in ?')
insert into Quotes(Percentage, Quote, Recommendation)
values('90', '', 'call a priest, a witch, and get right with your creator, best of luck out there !')
insert into Quotes(Percentage, Quote, Recommendation)
values('100', '', 'don''t...')

select * from Quotes

select * from FanFavorites
