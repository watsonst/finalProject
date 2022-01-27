import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getQuotes(): Observable<any>{
    return this.httpClient.get<any>("https://localhost:44339/Quotes/list")
  }
}
