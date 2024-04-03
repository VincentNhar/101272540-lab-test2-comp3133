import { Component, Input} from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [MissiondetailsComponent],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  title: String = 'SpaceX Mission Launch List';
  missions: any = new Object;
  year: number | undefined;

  constructor (private service: SpacexapiService, private router: Router) { }

  onClick(flightNumber: any){
    this.router.navigate(['/mission-details', flightNumber]);
  }

  ngOnInit(): void {
    if (this.year){
      this.fetchLaunchByYear(this.year);
    }else{
      this.fetchLaunches()
    }
  }

  private fetchLaunches(): void{
    this.service.fetchLaunches()
      .subscribe((res) => {
        this.missions = res;
        console.log(res)
      })
  }

  private fetchLaunchByYear(year: number): void {
    this.service.fetchLaunchesByYear(year)
      .subscribe((res) => {
        this.missions = res
      })
  }
}
