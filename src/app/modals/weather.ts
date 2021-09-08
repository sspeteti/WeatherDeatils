export interface City {
  id: string;
  name: string;
  coord?: Coordinates;
  country?: string;
  wind?: Wind;
  main?: Main;
  weather: Array<Weather>;
}

export interface Coordinates {
  lon: string;
  lat: string;
}

export interface Forecast {
  temp: number;
  weather: Array<Weather>;
  humidity: number;
  wind_speed: number;
  feels_like: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: string;
  deg: number;
}

export interface WeatherSys {
  pod: string;
}
export interface Main {
  temp: number;
  weather: Array<Weather>;
  humidity: number;
  wind_speed: number;
  feels_like: number;
}

//   export interface main {
//     dt: number;
//     main: Forecast;
//     weather: WeatherDescription[];
//     clouds: Clouds;
//
//     sys: WeatherSys;
//     dt_txt: string;
//   }

//   export interface Weather {
//     city?: City;
//     cod?: string;
//     message?: number;
//     cnt?: number;
//     list?: WeatherList[];
//   }
