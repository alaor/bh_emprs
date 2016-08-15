import { Component, OnInit } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

import { EmployersService } from '../employers/employers.service';

//jQuery
declare var jQuery:any;

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  info: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [EmployersService],
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class HomeComponent implements OnInit {

  title: string = 'Meu primeiro mapa';
  lat: number = -20.626959;
  lng: number = -45.154981;

  markers: marker[] = [];

  constructor(private employersService: EmployersService) {}

  ngOnInit(){
    this.getEmployers();
  }

  getEmployers(){
    this.employersService.getData()
      .subscribe(
        data => {
          for (let key in data) {

            this.markers.push({
              lat: Number(data[key].lat),
              lng: Number(data[key].lng),
              info: data[key].info,
              label: data[key].label,
              draggable: false
            })

          }
        },
        error => console.log(error)
      );
  }

}
