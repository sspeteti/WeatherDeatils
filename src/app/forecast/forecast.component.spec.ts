import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ForecastComponent } from './forecast.component';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        NgxPaginationModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let router: Router;
    let activatedRoute: ActivatedRoute;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`forecast data should not be null`, () => {
    const fixture = TestBed.createComponent(ForecastComponent);
    const app = fixture.componentInstance;
    expect(app.forecastWeather).not.toBeNull();
  });
  it(`totalRecords data should not be null`, () => {
    const fixture = TestBed.createComponent(ForecastComponent);
    const app = fixture.componentInstance;
    expect(app.totalRecords).not.toBeNull();
  });
});
