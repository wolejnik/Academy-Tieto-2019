import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-feature4',
  templateUrl: './feature4.component.html',
})
export class Feature4Component {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  city: string = '';
  data: WeatherForecast;

  getWeather(){
    this.http.get<WeatherForecast>(`${this.baseUrl}api/SampleData/WeatherForecastsForCity?city=${this.city}`).subscribe(result => {
      this.data = result;

    }, error => console.error(error));
  }

}

interface Weather {
  "id": number,
  "main":string,
  "description":string,
  "icon":string
}


interface WeatherForecast {
    "coord": {
       "lon": number,
       "lat": number
    },
    "weather": Weather[];
    /*,
    "base":"stations",
    "main":{
       "temp":280.32,
       "pressure":1012,
       "humidity":81,
       "temp_min":279.15,
       "temp_max":281.15
    },
    "visibility":10000,
    "wind":{
       "speed":4.1,
       "deg":80
    },
    "clouds":{
       "all":90
    },
    "dt":1485789600,
    "sys":{
       "type":1,
       "id":5091,
       "message":0.0103,
       "country":"GB",
       "sunrise":1485762037,
       "sunset":1485794875
    },
    "id":2643743,
    "name":"London",
    "cod":200
 }
 */
}

