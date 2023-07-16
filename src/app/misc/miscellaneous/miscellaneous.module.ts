import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MiscellaneousComponent } from './miscellaneous.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MiscellaneousComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MiscellaneousModule { }
