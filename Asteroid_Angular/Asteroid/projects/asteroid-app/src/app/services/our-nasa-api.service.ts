import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OurNasaApiService {

  constructor(
    private httpClient: HttpClient
  ) {}

    getMiles(finalDate: String): Observable<any>{
      return this.httpClient.get(`https://nasaistheskyfalling.azurewebsites.net/NASA/miles?finalDate=${finalDate}`)
    }

    getKilometers(finalDate: String): Observable<any>{
      return this.httpClient.get(`https://nasaistheskyfalling.azurewebsites.net/NASA/kilometers?finalDate=${finalDate}`)
    }

    getName(finalDate: String): Observable<any>{
      return this.httpClient.get(`https://nasaistheskyfalling.azurewebsites.net/NASA/name?finalDate=${finalDate}`)
    }

    getCount(finalDate: String): Observable<any>{
      return this.httpClient.get(`https://nasaistheskyfalling.azurewebsites.net/NASA/count?finalDate=${finalDate}`)
    }
}
