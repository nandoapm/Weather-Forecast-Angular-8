import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  title = 'Previsao do Tempo';
  
  constructor() { }

  ngOnInit() {
  }

}
