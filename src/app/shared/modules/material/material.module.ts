import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [],
  imports: [
    MatChipsModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatChipsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
