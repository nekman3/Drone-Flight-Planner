import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

// components
import { FlightPlanComponent } from './components/flight-plan-page/flight-plan.component';

// service
import { FlightPlanService } from './services/flight-plan.service';
import { FlightPlanDetailsComponent } from './containers/flight-plan-details/flight-plan-details.component';
import { FlightPlanMapComponent } from './components/flight-plan-map/flight-plan-map.component';

// Angular material
import { MatButtonModule, MatListModule, MatDividerModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHLTYqKCsHVDpGtMGstDzI5DlCRroicqo'
    }),
    BrowserModule,
    TranslateModule
  ],
  declarations: [
    FlightPlanComponent,
    FlightPlanDetailsComponent,
    FlightPlanMapComponent
  ],
  exports: [
    FlightPlanComponent,
    FlightPlanDetailsComponent,
    FlightPlanMapComponent
  ],
  providers: [
    FlightPlanService,
    HttpClientModule
  ]
})
export class FlightPlanModule { }
