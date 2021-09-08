import { TestBed } from '@angular/core/testing';
import { WeatherdataService } from './weatherdata.service';
import { City } from './modals/weather';
import { Coordinates } from './modals/weather';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('WeatherdataService', () => {
  let service: WeatherdataService;
  let city: City;
  let coordinates: Coordinates;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherdataService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be get the current weather report', () => {
    city = {
      id: '801',
      name: 'amsterdam',
      weather: [],
    } as any;
    let currentweather = service.getCurrentWeather(city.name);
    expect(service).toBeTruthy();
  });
  it('should be get the forecast weather report', () => {
    coordinates = {
      lon: '52.374',
      lat: '4.8897',
    };
    let currentweather = service.getForecast(coordinates.lat, coordinates.lon);
    expect(service).toBeTruthy();
  });
  it('should be get the list forecast weather report for 48 hours', () => {
    coordinates = {
      lon: '52.374',
      lat: '4.8897',
    };
    let currentweather = service.getForecast(coordinates.lat, coordinates.lon);
    expect(currentweather).not.toBeNull();
  });
  it('should be get the current weather report', () => {
    city = {
      id: '801',
      name: 'amsterdam',
      weather: [],
    } as any;
    let currentweather = service.getCurrentWeather(city.name);
    expect(currentweather).not.toBeNull();
  });
});
