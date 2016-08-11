import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

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
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class HomeComponent {

  title: string = 'Meu primeiro mapa';
  lat: number = -20.626959;
  lng: number = -45.154981;

  markers: marker[] = [
    {
      lat: -20.478638,
      lng: -45.120549,
      label: 'B',
      draggable: true,
      info: 'Point B'
    },
    {
      lat: -20.626959,
      lng: -45.154981,
      label: 'Alaor',
      draggable: false,
      info: 'Point A'
    }
  ]


}
