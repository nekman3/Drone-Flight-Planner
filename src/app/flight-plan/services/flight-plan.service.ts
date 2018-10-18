import { FlightPlan } from './../models/flight-plan';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const FLIGHT_PLANS_API = '/flightPlans';

@Injectable({
  providedIn: 'root'
})
export class FlightPlanService {

  public flightPlan = new FlightPlan();

  constructor(public http: HttpClient) { }

  public setFlightPlan(value: FlightPlan) {
    this.flightPlan = value;
  }

  public getFlightPlanList(): Observable<FlightPlan[]> {
    return this.http.get<FlightPlan[]>(FLIGHT_PLANS_API);
  }

  public saveFlightPlan(): Observable<FlightPlan> {
    return this.http.post<FlightPlan>(FLIGHT_PLANS_API, this.flightPlan);
  }
}
