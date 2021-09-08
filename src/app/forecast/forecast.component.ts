import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherdataService } from '../weatherdata.service';
import { Forecast, City } from '../modals/weather';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  forecastWeather!: Array<Forecast>;
  weatherSub!: Subscription;
  routeSub!: Subscription;
  lat!: any;
  lon!: any;
  cityName!: City;
  totalRecords!: any;
  page: any = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private WeatherdataService: WeatherdataService
  ) {}

  ngOnInit(): void {
    // Get coordinates from URL params
    this.activatedRoute.params.subscribe((params) => {
      this.lon = params['lon'];
      this.lat = params['lat'];
      this.cityName = params['city'];
    });
    this.getforecastReport(this.lat, this.lon);
  }
  getforecastReport(lat: string, lon: string) {
    debugger;
    this.weatherSub = this.WeatherdataService.getForecast(
      this.lon,
      this.lat
    ).subscribe(
      (res) => {
        this.forecastWeather = res.hourly;
        this.totalRecords = res.hourly.length;
      },
      (err) => {},
      () => {
        console.log('Error identified');
      }
    );
  }
  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.weatherSub) {
      this.weatherSub.unsubscribe();
    }
  }
}
