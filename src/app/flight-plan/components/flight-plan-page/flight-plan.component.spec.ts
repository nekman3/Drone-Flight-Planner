import { FlightPlanMapComponent } from './../flight-plan-map/flight-plan-map.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPlanComponent } from './flight-plan.component';
import { FlightPlanDetailsComponent } from 'src/app/flight-plan/containers/flight-plan-details/flight-plan-details.component';
import { MatDividerModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('FlightPlanComponent', () => {
  let component: FlightPlanComponent;
  let fixture: ComponentFixture<FlightPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlightPlanComponent,
        FlightPlanDetailsComponent,
        FlightPlanMapComponent
       ],
       imports: [
        MatListModule,
        MatDividerModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAHLTYqKCsHVDpGtMGstDzI5DlCRroicqo'
        }),
        HttpClientModule,
        MatSnackBarModule,
        TranslateModule.forRoot()
      ],
      providers: [TranslateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
