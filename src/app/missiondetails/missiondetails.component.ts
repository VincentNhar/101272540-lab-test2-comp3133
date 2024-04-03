import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent{
  mission: any;
  title: String = 'SpaceX Mission Details';

  constructor(private service: SpacexapiService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const flightNumber: any = params.get('flightnumber');

      this.service.fetchLaunchByFlightNumber(flightNumber)
        .subscribe((res) => {
        this.mission = res[0]
        console.log(this.mission)
      })

    });
  }
}
