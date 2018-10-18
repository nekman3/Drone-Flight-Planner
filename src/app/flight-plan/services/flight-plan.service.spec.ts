import { TestBed, inject } from '@angular/core/testing';

import { FlightPlanService } from './flight-plan.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FlightPlan } from 'src/app/flight-plan/models/flight-plan';

let flightPlanService: FlightPlanService;
let httpMock: HttpTestingController;

describe('FlightPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightPlanService],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
    });

    flightPlanService = TestBed.get(FlightPlanService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([FlightPlanService], (service: FlightPlanService) => {
    expect(service).toBeTruthy();
  }));

  it('should test the getFlightPlanList', () => {
    const obsFlightPlans = flightPlanService.getFlightPlanList();
    obsFlightPlans.subscribe(result => {
      expect((<any>flightPlanService).getFlightPlanList()).toBe(obsFlightPlans);
    });

    const req = httpMock.expectOne('/flightPlans');
    expect(req.request.method).toBe('GET');
  });

  it('should test the setFlightPlan', () => {
    const flightPlan: FlightPlan = {
      coordinates: [
        {
          lat: 10.0000,
          lng: 50.0000
        }
      ],
      id: 'ddd111',
    };

    flightPlanService.setFlightPlan(flightPlan);
    expect(flightPlanService.flightPlan).toEqual(flightPlan);
  });

  it('should save to db.json', () => {
    const flightPlan: FlightPlan = {
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

    flightPlanService.setFlightPlan(flightPlan);
    const obsFlightPlan = flightPlanService.saveFlightPlan();
    obsFlightPlan.subscribe(result => {
      expect((<any>flightPlanService).saveFlightPlan()).toBe(obsFlightPlan);
    });

    const req = httpMock.expectOne('/flightPlans');
    expect(req.request.method).toBe('POST');
  });
});
