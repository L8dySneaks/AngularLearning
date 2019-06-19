import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatChipsModule,
    MatCardModule
  ],
  exports: [
    MatChipsModule,
    MatCardModule
  ]
})
export class MaterialModule { }
