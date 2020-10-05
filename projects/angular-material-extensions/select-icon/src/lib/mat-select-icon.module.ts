import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectIconComponent } from './mat-select-icon/mat-select-icon.component';


@NgModule({
  declarations: [MatSelectIconComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [MatSelectIconComponent]
})
export class MatSelectIconModule {
}
