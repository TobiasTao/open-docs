import { Component } from '@angular/core';
import { ElectronService } from './core/services/electron.service';
import { Router } from '@angular/router';

@Component({
  selector: 'open-docs-root',
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
