import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-feature4',
  templateUrl: './feature4.component.html',
})
export class Feature4Component {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  city = '';
  data: WeatherForecast;

  getWeather() {
    this.http.get<WeatherForecast>(`${this.baseUrl}api/SampleData/WeatherForecastsForCity?city=${this.city}`).subscribe(result => {
      this.data = result;
    }, error => console.error(error));
  }

}

interface Weather {
  'id': number;
  'main': string;
  'description': string;
  'icon': string;
}


interface WeatherForecast {
    'coord': {
       'lon': number,
       'lat': number
    };
    'weather': Weather[];
    'base': string;
    'main': {
      'temp': number;
      'pressure': number;
      'humidity': number;
      'temp_min': number;
      'temp_max': number;
    };
    'visibility': number;
    'wind': {
      'speed': number;
      'deg': number;
    };
}
