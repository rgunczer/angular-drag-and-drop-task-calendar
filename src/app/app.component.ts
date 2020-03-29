import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soAppDragAndDrop';
  dates = [ new Date(2020, 0), new Date(2020, 1), new Date(2020, 2) ];
}
