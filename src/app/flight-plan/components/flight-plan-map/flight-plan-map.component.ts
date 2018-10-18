import { FlightPlanService } from './../../services/flight-plan.service';
import { Coordinate } from './../../models/coordinate';
import { FlightPlan } from './../../models/flight-plan';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flight-plan-map',
  templateUrl: './flight-plan-map.component.html',
  styleUrls: ['./flight-plan-map.component.scss']
})
export class FlightPlanMapComponent implements OnInit {

  private lat: number;
  private lng: number;
  private locationMapChosen: boolean;
  private defaultZoom: number;
  private coordinate: Coordinate;

  constructor(private flightPlanService: FlightPlanService) { }

  @Input()
  flightPlan: FlightPlan;

  @Output()
  flightPlanPoints = new EventEmitter();

  ngOnInit() {
    this.lat = 38.46361;
    this.lng = 23.59944;
    this.defaultZoom = 16;

    if (typeof this.flightPlan === 'undefined') {
      this.flightPlan = new FlightPlan();
      this.flightPlan.coordinates = [];
    }
  }

  public chooseMapLocation(event) {
    this.coordinate = new Coordinate(event.coords);
    this.flightPlan.id = Math.random().toString(16).slice(2);
    this.flightPlan.coordinates.push(this.coordinate);
    this.flightPlanService.setFlightPlan(this.flightPlan);
    this.flightPlanPoints.emit(this.flightPlan.coordinates.length);
  }

}
