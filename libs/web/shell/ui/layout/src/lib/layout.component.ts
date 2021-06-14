import { Component } from '@angular/core';
import { ElectronService } from '@open-docs/web/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isElectron = false;

  constructor(ele: ElectronService) {
    this.isElectron = ele.isElectron;
  }
}
