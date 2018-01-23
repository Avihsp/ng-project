import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { MaterialModule } from './material.module';
// import 'primeng/primeng';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    // MaterialModule,
    ButtonModule,
    MenubarModule,
    SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
