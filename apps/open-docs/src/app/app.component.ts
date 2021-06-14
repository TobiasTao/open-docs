import { Component } from '@angular/core';

@Component({
  selector: 'od-root',
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'open-docs';
  hhh = false;
}
