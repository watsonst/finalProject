import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanFavoritesComponent } from './fan-favorites/fan-favorites.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "fanfavorites", component: FanFavoritesComponent},
  {path: "", redirectTo: "/home", pathMatch: "prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
