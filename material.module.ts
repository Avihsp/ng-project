import { NgModule } from '@angular/core';

import {  MatSidenavModule,
          MatIconModule,
          MatMenuModule,
          MatCardModule,
          MatGridListModule,
          MatButtonModule,
          MatFormFieldModule,
  MatSelectModule,
  MatNativeDateModule,
  MatInputModule,
          MatDatepickerModule,
  MatRadioModule
        } from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule
  ],

  exports: [
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule
  ],

  declarations: []
})
export class MaterialModule { }
