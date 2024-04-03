import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MissiondetailsComponent, MissionlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = '101272540 Labtest2 Comp3133';

  constructor () { }

}
