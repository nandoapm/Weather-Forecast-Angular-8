import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }     from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchComponent } from './components/search/search.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherService } from './services/weather.service';

const appRoutes: Routes = [
  {
    // Root AppComponent
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full' 
  },
  { 
    path: 'weather',
    component: WeatherComponent 
  },
  
 {
    path: 'forecast/:id',
    component: ForecastComponent  
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SearchComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
