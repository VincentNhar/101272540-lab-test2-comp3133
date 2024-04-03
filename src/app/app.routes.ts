import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';


export const routes: Routes = [
    
    {path: 'mission-list', component: MissionlistComponent},
    {path: 'mission-details/:flightnumber', component: MissiondetailsComponent},
    {path: '', redirectTo: '/mission-list', pathMatch: 'full'}

];
