import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { InputComponent } from './core/components/input/input/input.component';
import { MainComponent } from './core/components/main/main.component';
import { DisplayComponent } from './core/components/display/display/display.component';
import { NavbarComponent } from './core/components/navbar/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MainComponent,
    DisplayComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
