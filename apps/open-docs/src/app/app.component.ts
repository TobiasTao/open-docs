import { Component } from '@angular/core';
import { ElectronService } from './core/services/electron.service';


@Component({
  selector: 'open-docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'open-docs';
  platform = '';

  constructor(electronService: ElectronService) {
    this.platform = electronService.platform;

  }
}

