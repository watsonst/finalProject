import { Component, OnInit, Input } from '@angular/core';
import { QuotesApiService } from '../services/quotes-api.service';
import { Quotes } from '../Models/Quotes';
import { FanFavoritesService } from '../services/fan-favorites.service';
import { OurNasaApiService } from '../services/our-nasa-api.service';
import { CreateFanFavoritesRequest } from '../Models/CreateFanFavRequest';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  newFavorite: CreateFanFavoritesRequest = new CreateFanFavoritesRequest(0, "", 0, "", "")
  asteroids: any;
  input: Number = 0;
  tempQuote: Quotes;
  quotesList: Quotes[] = [];
  singlequote: Quotes;

  percentage: Number = 0;
  quote: String = "";
  recommendation: String = "";

  counter: Number = 0;

  finalDate: String = "";
  miles: Number = 0;
  kilometers: Number = 0;
  title: any;
  amount:Number = 0;

  linkToHome: String = '#';
  linkToFanFavorites: String = '#';

  @Input() dateYYYY: String = ""; dateMM: String = ""; dateDD: String = "";

  constructor(
    private quotesAPISvc: QuotesApiService,
    private favoritesAPISvc: FanFavoritesService,
    private ourNasaAPISvc: OurNasaApiService
  ) {this.tempQuote = new Quotes(0,"",""), this.singlequote = new Quotes(0, "", "");}

  ngOnInit(): void {
    this.linkToHome = `/home`
    this.linkToFanFavorites = `/fanfavorites`
  }

 getQuotes(){
     this.quotesAPISvc.getQuotes().subscribe((Quotes) => {
      this.quotesList = Quotes
   })
  }

  calculateChance(){
    let tempQuote = new Quotes(0,"","");
      if (this.amount >= 1 && this.amount <= 4) {
         tempQuote.percentage = 10; 
        }
        else if (this.amount == 5) {
        tempQuote.percentage = 20;
        } else if (this.amount == 6) {
        tempQuote.percentage = 30;
        } else if (this.amount == 7) {
        tempQuote.percentage = 40;
        } else if (this.amount == 8) {
        tempQuote.percentage = 50;
        } else if (this.amount == 9) {
        tempQuote.percentage = 60;
        } else if (this.amount == 10) {
        tempQuote.percentage = 70;
        } else if (this.amount == 11) {
        tempQuote.percentage = 80;
        } else if (this.amount == 12) {
        tempQuote.percentage = 90;
        } else if (this.amount>= 13) {
        tempQuote.percentage = 100;
      }
    console.log(tempQuote)      

    this.quotesAPISvc.getQuotes().subscribe((Quotes) => {
    this.quotesList = Quotes
    let singlequote = this.quotesList.find(q => q.percentage === tempQuote.percentage)
    if (singlequote != null){
      console.log(singlequote.percentage)
      this.percentage = singlequote.percentage
      console.log(singlequote.quote)
      this.quote = this.singlequote.quote
      console.log(singlequote.recommendation)
      this.recommendation = singlequote.recommendation
    } 
  })
  }

  getMiles(finalDate: String){
    this.ourNasaAPISvc.getMiles(finalDate).subscribe((miles) => {
      this.miles = miles
      console.log(this.miles)
    })
  }
    
  getKilometers(finalDate: String){
    this.ourNasaAPISvc.getKilometers(finalDate).subscribe((kilometers) =>{
      this.kilometers = kilometers
       console.log(this.kilometers)
    })
  }
    
  getName(finalDate: String){
    this.ourNasaAPISvc.getName(finalDate).subscribe((title) =>{
      this.title = title
      console.log(this.title)
    })
  }
    
  getCount(finalDate: String){
    this.ourNasaAPISvc.getCount(finalDate).subscribe((amount) =>{
      this.amount = amount
      console.log(this.amount)
      this.calculateChance()
    })
  }

    createFavorites(){
      let favorite = new CreateFanFavoritesRequest(this.percentage, this.getFinalDate(), 0, this.quote, this.recommendation)
     this.favoritesAPISvc.createFavorite(favorite).subscribe((newFav)=> {
      console.log("[INFO]")
      console.log(newFav)
    })
  }

  createCreateFFR(percentage: Number, date: String, quote: String, recommendation: String): CreateFanFavoritesRequest{
    let createFFR: CreateFanFavoritesRequest = new CreateFanFavoritesRequest (percentage, date, 0, quote, recommendation)
    return createFFR
  }

  showCard(){
    let T: any = document.getElementById("my-card")
    T.style.display = "block"
  }

  getFinalDate(): String{
    let finalDate:String = this.dateYYYY + "-" + this.dateMM + "-" + this.dateDD
    this.getMiles(finalDate)
    this.getKilometers(finalDate)
    this.getName(finalDate)
    this.getCount(finalDate)
    this.showCard()
    return finalDate
  }
}
