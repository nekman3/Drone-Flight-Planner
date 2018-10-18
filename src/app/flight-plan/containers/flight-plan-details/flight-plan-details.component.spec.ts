import { HttpClientModule } from '@angular/common/http';
import { MatListModule, MatSnackBarConfig, MatSnackBarModule, MatSnackBar } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FlightPlanDetailsComponent } from './flight-plan-details.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FlightPlanService } from 'src/app/flight-plan/services/flight-plan.service';
import { FlightPlan } from 'src/app/flight-plan/models/flight-plan';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

describe('FlightPlanDetailsComponent', () => {
  let component: FlightPlanDetailsComponent;
  let fixture: ComponentFixture<FlightPlanDetailsComponent>;
  let flightPlanService: FlightPlanService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightPlanDetailsComponent ],
      imports: [
        MatListModule,
        HttpClientModule,
        MatSnackBarModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [MatSnackBar, TranslateService, FlightPlanService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightPlanDetailsComponent);
    component = fixture.componentInstance;
    flightPlanService = TestBed.get(FlightPlanService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test createFlightPlan', () => {
    const flightPlan = new FlightPlan();
    flightPlan.coordinates = [];
    component.createFlightPlan();
    expect(component.flightPlan).toEqual(flightPlan);
  });

  it('should test selectFlightPlan', () => {
    const testFlightPlan = new FlightPlan();
    testFlightPlan.id = 'aaa222';
    const mockFlightPlans: FlightPlan[] = [
      {
        coordinates: [
          {
            lat: 51.67841799999999,
            lng: 7.803056016386336
          },
          {
            lat: 51.67891029554595,
            lng: 7.807755246580427
          }
        ],
        id: 'ddd111',
      },
      {
      coordinates: [
        {
          lat: 51.67998800495046,
          lng: 7.806532159269636
        },
        {
          lat: 51.67675479978956,
          lng: 7.807798161924666
        }
      ],
      id: 'aaa222',
    }
  ];

    spyOn(flightPlanService, 'getFlightPlanList').and.returnValue(of(mockFlightPlans));
    component.selectFlightPlan(testFlightPlan.id);
    expect(component.flightPlan).toEqual(mockFlightPlans[1]);
  });

  it('should test saveFlightPlan', () => {
    const mockFlightPlan: FlightPlan = {
        coordinates: [
          {
            lat: 51.67841799999999,
            lng: 7.803056016386336
          },
          {
            lat: 51.67891029554595,
            lng: 7.807755246580427
          }
        ],
        id: 'ddd111',
      };

    spyOn(flightPlanService, 'saveFlightPlan').and.returnValue(of(mockFlightPlan));
    component.saveFlightPlan();
    expect(component.selectedId).toEqual(mockFlightPlan.id);
  });

});
