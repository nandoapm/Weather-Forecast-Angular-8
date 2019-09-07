import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  
  titleCity = 'Weather in';
  dataLocation: any = {};

  constructor(private weatherService: WeatherService,
    private activatedRoute: ActivatedRoute,) { }

    ngOnInit() {
      this.activatedRoute.params.subscribe(params => this.weatherService.urlApi(params['id']));
 
      this.weatherService.cityWeatherForecast().subscribe((dataLocation) => {
        console.log(dataLocation);
        this.dataLocation = dataLocation;
      });
  }

}
