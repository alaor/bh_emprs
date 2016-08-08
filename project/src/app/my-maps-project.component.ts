import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'my-maps-project-app',
  templateUrl: 'my-maps-project.component.html',
  styleUrls: ['my-maps-project.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class MyMapsProjectAppComponent {
  title: string = 'Meu primeiro mapa';
  lat: number = -20.626959;
  lng: number = -45.154981;
}
