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
      return this.httpClient.get(`https://localhost:44373/NASA/miles?finalDate=${finalDate}`)
    }

    getKilometers(finalDate: String): Observable<any>{
      return this.httpClient.get(`https://localhost:44373/NASA/kilometers?finalDate=${finalDate}`)
    }

    getName(finalDate: String): Observable<any>{
      return this.httpClient.get(`https://localhost:44373/NASA/name?finalDate=${finalDate}`)
    }

    getCount(finalDate: String): Observable<any>{
      return this.httpClient.get(`https://localhost:44373/NASA/count?finalDate=${finalDate}`)
    }
}
