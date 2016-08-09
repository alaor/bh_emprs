import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

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

  constructor() { }


}
