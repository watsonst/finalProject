--drop table if exists fanfavorites

create table FanFavorites(
	Id int primary key identity(1,1),
	Percentage int foreign key references Quotes,
	Counter int,
	Date nvarchar(20),
	Quote nvarchar(20),
	Recommendation nvarchar(20)
)

select * from FanFavorites