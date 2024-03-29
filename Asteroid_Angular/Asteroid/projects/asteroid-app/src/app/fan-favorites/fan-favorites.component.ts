import { Component, OnInit } from '@angular/core';
import { FanFavorites } from '../Models/FanFavorites';
import { FanFavoritesService } from '../services/fan-favorites.service';

@Component({
  selector: 'app-fan-favorites',
  templateUrl: './fan-favorites.component.html',
  styleUrls: ['./fan-favorites.component.css']
})
export class FanFavoritesComponent implements OnInit {
  id: Number = 0
  favorites: FanFavorites[]=[]

  percentage: Number = 0
  linkToHome: String = '#';

  constructor(
    private favoriteAPISvc: FanFavoritesService
  ) { }

  ngOnInit(): void {
    this.readFavorites();
  }

  readFavorites(){
    this.favoriteAPISvc.getFavorites().subscribe((favorites) => {
      //console.log(["INFO"])
      console.log(favorites);
      this.favorites = favorites
    })
  }

  updateFavorites(favorite: FanFavorites){
    this.favoriteAPISvc.updateFavorite(favorite).subscribe((favorites) => {
      console.log(["update"])
      console.log(favorites)
    })
    this.reloadCurrentPage()
  }

  reloadCurrentPage() {
    window.location.reload()
  }

  deleteFavorite(id: Number){
    console.log(id)
    this.favoriteAPISvc.deleteFavorite(id).subscribe()
    this.reloadCurrentPage()
    }
}
