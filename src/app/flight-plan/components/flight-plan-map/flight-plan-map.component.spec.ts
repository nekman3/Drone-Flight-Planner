import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPlanMapComponent } from './flight-plan-map.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('FlightPlanMapComponent', () => {
  let component: FlightPlanMapComponent;
  let fixture: ComponentFixture<FlightPlanMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightPlanMapComponent ],
      imports: [
        HttpClientModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAHLTYqKCsHVDpGtMGstDzI5DlCRroicqo'
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightPlanMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test chooseMapLocation', () => {
    const event = {
      coords: {
        lat: 50.6545632,
        lng: 7.02541146
      }
    };
    component.chooseMapLocation(event);

   expect(component.flightPlan.coordinates[0].lat).toEqual(event.coords.lat);
   expect(component.flightPlan.coordinates[0].lng).toEqual(event.coords.lng);
  });
});
