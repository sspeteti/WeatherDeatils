import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { WeatherdataService } from './weatherdata.service';
import { CurrentweatherComponent } from './currentweather/currentweather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { TemppipePipe } from './pipes/temppipe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CurrentweatherComponent,
    ForecastComponent,
    TemppipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
