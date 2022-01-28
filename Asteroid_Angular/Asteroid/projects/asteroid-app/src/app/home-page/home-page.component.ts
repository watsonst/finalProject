import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NASAApiService } from '../services/nasa-api.service';
import { Asteroids } from '../Models/Asteroids';
import { QuotesApiService } from '../services/quotes-api.service';
import { Quotes } from '../Models/Quotes';
import { Quote, templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  asteroids: any
  input: Number = 0
  tempQuote: Quotes

  constructor(
    private httpClient: HttpClient,
    private NASAAPISvc: NASAApiService,
    private quotesAPISvc: QuotesApiService
  ) {this.tempQuote = new Quotes(0,"","");}

  ngOnInit(): void {
    // this.getMiles();
    // this.getNames();
    // this.getHazard();
    // this.getQuotes();
    //this.tempQuote = new Quotes(0,"","");
    console.log(this.tempQuote)
    this.getNumberOfAsteroids(this.calculateChance);
    //this.calculateChance();
  }


  getMiles(){
      this.NASAAPISvc.getAsteroids().subscribe((Asteroids) => {
        console.log("[INFO]")
        console.log(Asteroids.near_earth_objects["2022-01-18"][0].estimated_diameter.miles.estimated_diameter_max);
        this.asteroids = Asteroids
        let asteroidsTemp = this.asteroids.near_earth_objects["2022-01-18"]
        console.log(asteroidsTemp)
        for (let i = 0; i < asteroidsTemp.length; i++) {
          const astMiles = asteroidsTemp[i].estimated_diameter.miles.estimated_diameter_max;
          console.log(astMiles)
        }
      })
  }

  getNames(){
    this.NASAAPISvc.getAsteroids().subscribe((Asteroids) => {
      console.log("[INFO]")
      console.log(Asteroids.near_earth_objects["2022-01-18"][0].name);
      this.asteroids = Asteroids
      let asteroidsTemp = this.asteroids.near_earth_objects["2022-01-18"]
      console.log(asteroidsTemp)
      for (let i = 0; i < asteroidsTemp.length; i++) {
        const astNames = asteroidsTemp[i].name;
        console.log(astNames)
      }
    })
  }

  getHazard(){
    this.NASAAPISvc.getAsteroids().subscribe((Asteroids) => {
      console.log("[INFO]")
      console.log(Asteroids.near_earth_objects["2022-01-18"][0].is_potentially_hazardous_asteroid);
      this.asteroids = Asteroids
      let asteroidsTemp = this.asteroids.near_earth_objects["2022-01-18"]
      console.log(asteroidsTemp)
      for (let i = 0; i < asteroidsTemp.length; i++) {
        const astHaz = asteroidsTemp[i].is_potentially_hazardous_asteroid;
        console.log(astHaz)
      }
    })
  }

  getNumberOfAsteroids(retElement: (input: Number) => void)
   {
    this.NASAAPISvc.getAsteroids().subscribe((Asteroids) => {
      retElement(Asteroids.element_count)
    })
  }

  getQuotes(){
    this.quotesAPISvc.getQuotes().subscribe((Quotes) => {
      console.log(Quotes)
    })
  }

  calculateChance(input: Number){
    let tempQuote = new Quotes(0,"","");

    console.log(input)
    console.log(tempQuote)
    // this.count = this.getNumberOfAsteroids();
    if (input <= 1 && input >= 4) {
      tempQuote.percentage = 10; 
    }
    else if (input == 5) {
      tempQuote.percentage = 20;
    } else if (input == 6) {
      tempQuote.percentage = 30;
    } else if (input == 7) {
      tempQuote.percentage = 40;
    } else if (input == 8) {
      tempQuote.percentage = 50;
    } else if (input == 9) {
      tempQuote.percentage = 60;
    } else if (input == 10) {
      tempQuote.percentage = 70;
    } else if (input == 11) {
      tempQuote.percentage = 80;
    } else if (input == 12) {
      tempQuote.percentage = 90;
    } else if (input >= 13) {
      tempQuote.percentage = 100;
     } //else {
    //   tempQuote.percentage = 17;
    // }

    console.log(tempQuote.percentage);
   //   case (this.count >= 1 && this.count <= 4);
    //   this.tempQuote.percentage = 10;
    //   //Call Method to match percentage and pull quote
    //   break;
    //   case this.count = 5:
    //   this.tempQuote.percentage = 20;
    //   //Call Method to match percentage and pull quote
    //   break;
    //   case this.count = 6:
    //   this.tempQuote.percentage = 30;
    //   //Call Method to match percentage and pull quote
    //   break;
    //   case this.count = 7:
    //   this.tempQuote.percentage = 40;
    //   //Call Method to match percentage and pull quote
    //   break;
    //   case this.count = 8:
    //   this.tempQuote.percentage = 50;
    //   //Call Method to match percentage and pull quote
    //   break;
    //   case this.count = 9:
    //   this.tempQuote.percentage = 60;
    //   //Call Method to match percentage and pull quote
    //   break;
    //   case this.count = 10:
    //   this.tempQuote.percentage = 70;
    //   //Call Method to match percentage and pull quote
    //   break;
    //   case this.count = 11:
    //   this.tempQuote.percentage = 80;
    //   //Call Method to match percentage and pull quote
    //   break;
    //   case this.count = 12:
    //   this.tempQuote.percentage = 90;
    //   //Call Method to match percentage and pull quote
    //   break;
    //   case this.count >= 13:
    //   this.tempQuote.percentage = 100;
    //   //Call Method to match percentage and pull quote
    //   break;
    // }
    // console.log(this.tempQuote.percentage);
    // return;

  }


}
