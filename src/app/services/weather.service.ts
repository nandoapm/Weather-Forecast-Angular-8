import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiCityUrl: string;

  baseUrl: string = 'https://api.openweathermap.org/data/2.5/find';
  apiUrl: string = 'https://api.openweathermap.org/data/2.5/forecast?id=';
  endUrl: string = '&units=metric&appid=76d1b43ba3695cfae59aa9f7dc9b4877';
  queryUrl: string = '?q=';

	constructor( private http: HttpClient ) {
		console.log('Search Service Connected ...');
  }

  urlApi(cityId: string) {
  	this.apiCityUrl = this.apiUrl + cityId + this.endUrl;
  }

  // Openweathermap list Api
	cityWeatherForecast() {
		return this.http.get(this.apiCityUrl)
		.map(res => res);
  }
  // Json Cities List
	cityListJson() {
		// Full cities list Openweathermap connected
		return this.http.get("../../assets/city.list.json")
		.map(res => res);
	}
	searchEntries(term: string) {
    return this.http.get(this.baseUrl + this.queryUrl + term + this.endUrl)
      .map(res => res);
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(500)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term)
        .catch( error => { return Observable.empty() }));
  }
}
