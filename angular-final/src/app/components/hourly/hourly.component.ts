import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnInit {
  weatherService: WeatherService;
  currentReport: WeatherReport;

  constructor(weatherService:WeatherService) {
    this.weatherService = weatherService;
  }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(report => {
      this.currentReport = report;
    });
  }

  generatePrettyReport() {
    if (this.currentReport === undefined) { return; }

    return `At hour ${this.currentReport.hour} the condition will be ${this.currentReport.condition}.
      The temperature will be ${this.currentReport.tempC} C.`;
  }
}

interface WeatherReport {
  hour: string,
  tempC: string,
  condition: string
};
