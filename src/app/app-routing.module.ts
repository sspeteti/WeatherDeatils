import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CurrentweatherComponent } from './currentweather/currentweather.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  {
    path: 'currentweather/:loc',
    component: CurrentweatherComponent,
  },
  {
    path: 'forecast/:lat/:lon/:city',
    component: ForecastComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
