import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherdataService } from '../weatherdata.service';
import { Router } from '@angular/router';
import { City } from '../modals/weather';

@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.scss'],
})
export class CurrentweatherComponent implements OnInit {
  routeSub!: Subscription;
  weatherSub!: Subscription;
  weatherId!: string;
  currentWeather!: City;
  cityname!: string;
  description!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private WeatherdataService: WeatherdataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    debugger;
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.weatherId = params['loc'];
      this.getCurrentReport(this.weatherId);
    });
  }
  getCurrentReport(id: string) {
    this.weatherSub = this.WeatherdataService.getCurrentWeather(id).subscribe(
      (res) => {
        this.currentWeather = res;
        this.description = res.weather[0].description;
      },
      (err) => {},
      () => {
        console.log('Error identified');
      }
    );
  }
  public getForecast() {
    debugger;
    this.router.navigate([
      'forecast',
      this.currentWeather.coord?.lat,
      this.currentWeather.coord?.lon,
      this.weatherId,
    ]);
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
