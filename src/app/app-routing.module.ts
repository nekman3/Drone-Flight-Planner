// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { FlightPlanComponent } from './flight-plan/components/flight-plan-page/flight-plan.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'flightPlans', pathMatch: 'full'
    },
    {
        path: 'flightPlans', component: FlightPlanComponent, pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
