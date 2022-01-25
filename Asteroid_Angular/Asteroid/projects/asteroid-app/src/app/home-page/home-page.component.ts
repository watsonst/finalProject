import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NASAApiService } from '../services/nasa-api.service';
import { Asteroids } from '../Models/Asteroids';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  asteroids: Asteroids[] = []
  constructor(
    private httpClient: HttpClient,
    private NASAAPISvc: NASAApiService
  ) {}

  ngOnInit(): void {
    this.callApi();
  }


  callApi(){
      this.NASAAPISvc.getAsteroids().subscribe((Asteroids) => {
        console.log("[INFO]")
        console.log(Asteroids);
        this.asteroids = this.asteroids
      })
  }
}
