import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '@open-docs/web/core';

@Component({
  selector: 'od-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'open-docs';
  platform = '';

  constructor(private electronService: ElectronService, private router: Router) {
    this.platform = electronService.platform;
  }
}
