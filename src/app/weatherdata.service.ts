import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { City } from './modals/weather';
const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class WeatherdataService {
  // url= "http://api.openweathermap.org/data/2.5/forecast?q=";
  // api= 'da38a27998ec65b60c74b27f8a1c5065';

  constructor(private http: HttpClient) {}
  getCurrentWeather(loc: string): Observable<City> {
    debugger;
    return this.http.get<City>(
      `${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}`
    );
  }

  getForecast(lat: string, lon: string): Observable<any> {
    const params = new HttpParams({
      fromString: `lat=${lat}&lon=${lon}&APPID=${apiKey}`,
    });
    return this.http.get(`${environment.apiUrl}/onecall?`, { params });
  }
}
