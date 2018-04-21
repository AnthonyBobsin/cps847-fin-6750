import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  http: HttpClient;

  constructor(http:HttpClient) {
    this.http = http;
  }

  getWeather() {
    return this.http.get("http://api.wunderground.com/api/6cc2a7b85c12a074/hourly/q/zmw:00000.59.71820.json").
      map(data => {
        const currentHour:Object = data['hourly_forecast'][0];
        return {
          hour: currentHour['FCTTIME']['hour'],
          tempC: currentHour['temp']['metric'],
          condition: currentHour['condition']
        };
      });
  }
}
