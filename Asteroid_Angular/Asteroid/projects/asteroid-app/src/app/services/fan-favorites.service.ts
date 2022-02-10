import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FanFavorites } from '../Models/FanFavorites';
import { Observable } from 'rxjs';
import { CreateFanFavoritesRequest } from '../Models/CreateFanFavRequest';

@Injectable({
  providedIn: 'root'
})
export class FanFavoritesService {
  
  constructor(
    private httpClient: HttpClient
  ) { }
  getFavorites(): Observable<FanFavorites[]>{
    return this.httpClient.get<FanFavorites[]>("https://istheskyfalling.azurewebsites.net/FanFavorites/favlist")
  }

  createFavorite(favorite: CreateFanFavoritesRequest): Observable<FanFavorites> {
    return this.httpClient.post<FanFavorites>("https://istheskyfalling.azurewebsites.net/FanFavorites/newfav", favorite)
  }

  updateFavorite(favorite: FanFavorites): Observable<FanFavorites> {
    return this.httpClient.put<FanFavorites>("https://istheskyfalling.azurewebsites.net/updatefav", favorite)
  }

  deleteFavorite(id: Number): Observable<unknown> {
     return this.httpClient.delete(`https://istheskyfalling.azurewebsites.net/FanFavorites/delete?ID=${id}`)
  }
}
