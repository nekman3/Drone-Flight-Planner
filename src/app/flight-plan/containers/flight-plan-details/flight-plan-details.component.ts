import { FlightPlan } from './../../models/flight-plan';
import { FlightPlanService } from './../../services/flight-plan.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flight-plan-details',
  templateUrl: './flight-plan-details.component.html',
  styleUrls: ['./flight-plan-details.component.scss']
})
export class FlightPlanDetailsComponent implements OnInit {

  flightPlan: FlightPlan;
  subscription: Subscription;
  flightPlanPoints: number;
  activeFlightPlan: FlightPlan;
  flightPlanList: FlightPlan[] = [];
  selectedId: string;
  isPlanSaved: boolean;

  constructor(private flightPlanService: FlightPlanService) { }

  @Output()
  selectedPlanFlight = new EventEmitter();

  @Input()
  planFlightPoints: number;

  ngOnInit() {
    this.getFlightPlanList();
  }

  private getFlightPlanList() {
    this.flightPlanService.getFlightPlanList()
      .subscribe((data: FlightPlan[]) => {
        this.flightPlanList = data;
    });
  }

  public saveFlightPlan() {
    this.flightPlanService.saveFlightPlan()
    .subscribe((data: FlightPlan) => {
          this.getFlightPlanList();
          this.selectedId = data['id'];
          this.isPlanSaved = true;
      },
      error => {
          console.log('Error', error);
      });
  }

  public selectFlightPlan(planId: string) {
    this.flightPlanService.getFlightPlanList()
    .subscribe((data: FlightPlan[]) => {
      this.flightPlan = data.find(x => x.id === planId);
      this.selectedPlanFlight.emit( this.flightPlan);
      this.selectedId = planId;
    });
  }

  public createFlightPlan() {
    this.flightPlan = new FlightPlan();
    this.flightPlan.coordinates = [];
    this.selectedPlanFlight.emit(this.flightPlan);
    this.selectedId = null;
    this.isPlanSaved = false;
    this.planFlightPoints = null;
  }
}
