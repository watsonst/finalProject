import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NASAApiService } from '../services/nasa-api.service';
import { Asteroids } from '../Models/Asteroids';
import { QuotesApiService } from '../services/quotes-api.service';
import { Quotes } from '../Models/Quotes';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  asteroids: any
  constructor(
    private httpClient: HttpClient,
    private NASAAPISvc: NASAApiService,
    private quotesAPISvc: QuotesApiService
  ) {}

  ngOnInit(): void {
    //this.getMiles();
    //this.getNames();
    //this.getHazard();
    this.getQuotes();
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

  getNumberOfAsteroids(){
    this.NASAAPISvc.getAsteroids().subscribe((Asteroids) => {
      return Asteroids.element_count
    })
  }

  getQuotes(){
    this.quotesAPISvc.getQuotes().subscribe((Quotes) => {
      console.log(Quotes)
    })
  }

}
