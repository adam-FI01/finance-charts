import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GoldChartComponent } from '../gold-chart.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: GoldChartComponent }
    ])
  ],
  exports: [RouterModule]
})
export class GoldChartModule { }
