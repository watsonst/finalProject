import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from "@angular/common/http";
import { FanFavoritesComponent } from './fan-favorites/fan-favorites.component';
import { FanFavoritesService } from './services/fan-favorites.service';
import { QuotesApiService } from './services/quotes-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FanFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuotesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

