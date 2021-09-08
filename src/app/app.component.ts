import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherdataService } from './weatherdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weatherapplication';
  currentWeather: any = <any>{};
  city!: string;
  cities = ['London', 'Paris', 'Moscow', 'New York', 'Karachi', 'Sydney'];

  constructor(
    private weatherService: WeatherdataService,
    private router: Router
  ) {}
  ngOnInit() {}
  public getCurrentLoc(loc: any) {
    debugger;
    this.city = loc.target.id;
    this.currentWeather = {};
    this.router.navigate(['currentweather', this.city]);
    //     this.weatherService.getCurrentWeather(loc.target.id)
    //       .subscribe(res => {
    //         this.currentWeather = res;
    //         console.log(this.currentWeather)
    //       }, err => {
    // }, () => {
    //         console.log("Error identified")
    //       })
  }
}
