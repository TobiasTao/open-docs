import { Component, OnInit } from '@angular/core';
import { ElectronService } from '@open-docs/web/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isElectron = false;

  constructor(ele: ElectronService) {
    this.isElectron = ele.isElectron;
  }

  ngOnInit(): void {}
}
