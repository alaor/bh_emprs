import { Component } from '@angular/core';

import { MyMapsProjectAppComponent } from './my-maps-project.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MyMapsProjectAppComponent]
})
export class AppComponent {
  title = 'app works!';
}
