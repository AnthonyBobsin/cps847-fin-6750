import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HourlyComponent } from './components/hourly/hourly.component';

import 'rxjs/add/operator/map';
import { WeatherService } from "./services/weather.service";

@NgModule({
  declarations: [
    AppComponent,
    HourlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
