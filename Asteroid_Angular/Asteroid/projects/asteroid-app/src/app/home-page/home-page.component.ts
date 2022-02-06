import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NASAApiService } from '../services/nasa-api.service';
import { Asteroids } from '../Models/Asteroids';
import { QuotesApiService } from '../services/quotes-api.service';
import { Quotes } from '../Models/Quotes';
import { Quote, templateJitUrl } from '@angular/compiler';
import { FanFavorites } from '../Models/FanFavorites';
import { FanFavoritesService } from '../services/fan-favorites.service';
import { OurNasaApiService } from '../services/our-nasa-api.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  asteroids: any;
  input: Number = 0;
  tempQuote: Quotes;
  quotesList: Quotes[] = [];
  singlequote: Quotes;

  percentage: Number = 0;
  quote: String = "";
  recommendation: String = "";

  counter: Number = 0;

  //finalDate: String = `${this.dateYYYY}-${this.dateMM}-${this.dateDD}`
  finalDate: String = "";
  miles: Number = 0;
  kilometers: Number = 0;
  title: any;
  amount:Number = 0;

  linkToHome: String = '#';

  @Input() dateYYYY: String = ""; dateMM: String = ""; dateDD: String = "";

  constructor(
    private httpClient: HttpClient,
    private NASAAPISvc: NASAApiService,
    private quotesAPISvc: QuotesApiService,
    private favoritesAPISvc: FanFavoritesService,
    private ourNasaAPISvc: OurNasaApiService
  ) {this.tempQuote = new Quotes(0,"",""), this.singlequote = new Quotes(0, "", "");}

  ngOnInit(): void {
    //this.getMiles();
    //this.getKilometers()
    //this.getName()
    //this.getCount()
    // this.getNames();
    // this.getHazard();
    //this.getQuotes();
    //this.tempQuote = new Quotes(0,"","");
    //console.log(this.tempQuote)
    // this.getNumberOfAsteroids(this.calculateChance,this.quotesAPISvc);
    //this.calculateChance();
    //this.percentageMatch();
    this.linkToHome = `/home`
    this.getFinalDate();
  }

  getAsteroids(){
    this.NASAAPISvc.getAsteroids().subscribe((Asteroids) => {
      //console.log("[INFO]")
      console.log(Asteroids);
      
    })
  }



  // getMiles(){
  //     this.NASAAPISvc.getAsteroids().subscribe((Asteroids) => {
  //       //console.log("[INFO]")
  //       //console.log(Asteroids.near_earth_objects["2022-01-18"][0].estimated_diameter.miles.estimated_diameter_max);
  //       this.asteroids = Asteroids
  //       let asteroidsTemp = this.asteroids.near_earth_objects["2022-01-18"]
  //       console.log(asteroidsTemp)
  //       for (let i = 0; i < asteroidsTemp.length; i++) {
  //         const astMiles = asteroidsTemp[i].estimated_diameter.miles.estimated_diameter_max;
  //         console.log(astMiles)
  //       }
  //     })
  // }

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


  // getNames(){
  //   this.NASAAPISvc.getAsteroids().subscribe((Asteroids) => {
  //     //console.log("[INFO]")
  //     //console.log(Asteroids.near_earth_objects["2022-01-18"][0].name);
  //     this.asteroids = Asteroids
  //     let asteroidsTemp = this.asteroids.near_earth_objects["2022-01-18"]
  //     //console.log(asteroidsTemp)
  //     for (let i = 0; i < asteroidsTemp.length; i++) {
  //       const astNames = asteroidsTemp[i].name;
  //       console.log(astNames)
  //     }
  //   })
  // }

  // getNumberOfAsteroids(retElement: (input: Number, apiservice: QuotesApiService) => void, apiservice: QuotesApiService)
  //  {
  //   this.NASAAPISvc.getAsteroids().subscribe((Asteroids) => {
  //     retElement(Asteroids.element_count, apiservice)
  //   })
  // }

  // getQuotes(retQuote: (inputQ: Quotes[]) => void){
  //   this.quotesAPISvc.getQuotes().subscribe((Quotes) => {
  //     retQuote(Quotes)})
  // }

  // calculateChance(input: Number, apiservice: QuotesApiService){
  //   let tempQuote = new Quotes(0,"","");
    

  //   console.log(input)
  //   //console.log(tempQuote)
  //   // this.count = this.getNumberOfAsteroids();
  //   if (input <= 1 && input >= 4) {
  //     tempQuote.percentage = 10; 
  //   }
  //   else if (input == 5) {
  //     tempQuote.percentage = 20;
  //   } else if (input == 6) {
  //     tempQuote.percentage = 30;
  //   } else if (input == 7) {
  //     tempQuote.percentage = 40;
  //   } else if (input == 8) {
  //     tempQuote.percentage = 50;
  //   } else if (input == 9) {
  //     tempQuote.percentage = 60;
  //   } else if (input == 10) {
  //     tempQuote.percentage = 70;
  //   } else if (input == 11) {
  //     tempQuote.percentage = 80;
  //   } else if (input == 12) {
  //     tempQuote.percentage = 90;
  //   } else if (input >= 13) {
  //     tempQuote.percentage = 100;
  //   }

 

  //   apiservice.getQuotes().subscribe((Quotes) => {
  //     let singlequote = Quotes.find(q => q.percentage === tempQuote.percentage)
  //     if (singlequote != null){
  //       console.log(singlequote.percentage)
  //       console.log(singlequote.quote)
  //       console.log(singlequote.recommendation)
  //     }
  //     return singlequote

  //     })
      
      
      
      
  // let percentage = Quotes.filter(q => q.percentage === tempQuote.percentage).map(q => q.percentage)
  // let quote = Quotes.filter(q => q.percentage === tempQuote.percentage).map(q => q.quote)
  // let recommendation = Quotes.filter(q => q.percentage === tempQuote.percentage).map(q => q.recommendation)
  // this.percentage = this.percentage
  // this.quote = this.quote
  // this.recommendation = this.recommendation
  // console.log(percentage)
  // console.log(quote)
  // console.log(recommendation)})

   
 
  // addtofavorites(){
  //   let favorite = new FanFavorites(id, percentage, date, counter)
  //   this.favoritesAPISvc.createFavorite(favorite).subscribe((favorite) =>{
  //     console.log(["STUFF"])
  //     console.log(favorite)
  //   })
  // }

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
    })
  }

  getFinalDate(){
    let finalDate:String = this.dateYYYY + "-" + this.dateMM + "-" + this.dateDD
    this.getMiles(finalDate)
    this.getKilometers(finalDate)
    this.getName(finalDate)
    this.getCount(finalDate)
  }
  
}
