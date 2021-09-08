import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrentweatherComponent } from './currentweather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';

describe('CurrentweatherComponent', () => {
  let component: CurrentweatherComponent;
  let fixture: ComponentFixture<CurrentweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentweatherComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let router: Router;
    let activatedRoute: ActivatedRoute;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`currentWeather data should not be null`, () => {
    const fixture = TestBed.createComponent(CurrentweatherComponent);
    const app = fixture.componentInstance;
    expect(app.currentWeather).not.toBeNull();
  });
  it(`weatherId data should not be null`, () => {
    const fixture = TestBed.createComponent(CurrentweatherComponent);
    const app = fixture.componentInstance;
    expect(app.weatherId).not.toBeNull();
  });
});
