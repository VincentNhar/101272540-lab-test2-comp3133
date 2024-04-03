import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpacexapiService {

  constructor(private http:HttpClient) { }

  fetchLaunches(): Observable<any> {
    return this.http.get<any>('https://api.spacexdata.com/v3/launches')
  }

  fetchLaunchesByYear(year: number): Observable<any>{
    return this.http.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`)
  }

  fetchLaunchByFlightNumber(flight_number:number): Observable<any>{
    return this.http.get(`https://api.spacexdata.com/v3/launches?flight_number=${flight_number}`)
  }
}
