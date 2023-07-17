import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GoldChartComponent } from './Precious Metals/gold-chart/gold-chart.component';
import { HomeComponent } from './home/home.component';
import { StockPricesComponent } from './stock-prices/stock-prices.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'Precious-Metals', loadChildren: () => import('./Precious Metals/gold-chart/gold/gold-chart.module').then(m => m.GoldChartModule)},
  {path: 'Stocks', loadChildren: () => import('./stock-prices/stock-prices.module').then(m => m.StockPricesModule)},
  {path: 'Miscellaneous', loadChildren: () => import('./misc/miscellaneous/miscellaneous.module').then(m => m.MiscellaneousModule)},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)}
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
