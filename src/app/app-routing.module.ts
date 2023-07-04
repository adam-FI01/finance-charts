import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GoldChartComponent } from './Precious Metals/gold-chart/gold-chart.component';
import { HomeComponent } from './home/home.component';
import { StockPricesComponent } from './stock-prices/stock-prices.component';


const routes: Routes = [
  { path: 'precious-metals', component: GoldChartComponent },
  {path: 'home', component: HomeComponent},
  {path: 'stocks', component: StockPricesComponent}
  /* { path: 'second-component', component: SecondComponent }, */
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
