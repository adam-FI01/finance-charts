import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SilverChartComponent } from './Precious Metals/silver-chart/silver-chart.component';
import { GoldChartComponent } from './Precious Metals/gold-chart/gold-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StockPricesComponent } from './stock-prices/stock-prices.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { MiscellaneousComponent } from './misc/miscellaneous/miscellaneous.component';
import { MapComponent } from './misc/miscellaneous/map/map.component';
import { MarkerService } from './misc/miscellaneous/marker.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SilverChartComponent,
    GoldChartComponent,
    HomeComponent,
    StockPricesComponent,
    NotFoundComponent,
    MiscellaneousComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
