import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  results: any = {};
  searchTerms = new Subject<string>();

  constructor(private http: HttpClient, private weatherService: WeatherService) { }

  ngOnInit() {
  	this.weatherService.search(this.searchTerms)
  	.subscribe(results => {
	  		this.results = results;
	  		console.log(results);
  	});
  }

  searchKey($event) {
  	let evnt = $event.target.value;
  	this.searchTerms.next(evnt);

  	if(evnt.length === 0) {
  		this.results = [];
  	}
  }
  
 	clickedInside($event: Event) {
    $event.stopPropagation();  // <- that will stop propagation on lower layers
    // console.log("CLICKED INSIDE");
  }

}
