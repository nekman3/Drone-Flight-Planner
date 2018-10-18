import { FlightPlan } from './../../models/flight-plan';
import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-flight-plan',
  templateUrl: './flight-plan.component.html',
  styleUrls: ['./flight-plan.component.scss']
})
export class FlightPlanComponent {

  selectedPlanFlight: FlightPlan;
  selectedFlightPlanPoints: number;

  constructor() { }

  public setSelectedPlanFlight(event) {
    this.selectedPlanFlight = event;
  }

  public setFlightPlanPoints(event) {
    this.selectedFlightPlanPoints = event;
  }

}
