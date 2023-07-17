import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MapComponent } from './map.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MapComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MapModule { }
