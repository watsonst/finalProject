import { Component, OnInit } from '@angular/core';
import { FanFavorites } from '../Models/FanFavorites';
import { FanFavoritesService } from '../services/fan-favorites.service';

@Component({
  selector: 'app-fan-favorites',
  templateUrl: './fan-favorites.component.html',
  styleUrls: ['./fan-favorites.component.css']
})
export class FanFavoritesComponent implements OnInit {

  favorites: FanFavorites[]=[]

  percentage: Number = 0
 

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

  // updateFavorties(){
  //   this.favoriteAPISvc.updateFavorite().subscribe((?favorites?) => {
  //     console.log(["update"])
  //     console.log(?favorites?)
  //   })
  // }

}
