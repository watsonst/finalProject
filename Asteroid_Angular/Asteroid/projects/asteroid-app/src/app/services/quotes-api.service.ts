import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quotes } from '../Models/Quotes';

@Injectable({
  providedIn: 'root'
})
export class QuotesApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getQuotes(): Observable<Quotes[]>{
    return this.httpClient.get<Quotes[]>("https://localhost:44339/Quotes/list")
  }



  
}
