import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StockPricesComponent } from './stock-prices.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StockPricesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class StockPricesModule { }
