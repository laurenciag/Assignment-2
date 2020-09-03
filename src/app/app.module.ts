import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes, Router} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';
import { HomeCountryComponent } from './pages/home-country/home-country.component';
import { ListCountryComponent } from './pages/list-country/list-country.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailCountryComponent,
    HomeCountryComponent,
    ListCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
