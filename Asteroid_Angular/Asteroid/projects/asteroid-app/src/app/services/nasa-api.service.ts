import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Asteroids } from "../Models/Asteroids";


@Injectable({
  providedIn: 'root'
})
export class NASAApiService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getAsteroids(): Observable<Asteroids[]>{
      return this.httpClient.get<Asteroids[]>("https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-01-18&end_date=2022-01-18&api_key=DEMO_KEY")
  }

}
