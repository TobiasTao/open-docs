import { Component } from '@angular/core';
import { ElectronService } from '@open-docs/web/core';

@Component({
  selector: 'od-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent {
  constructor(private electronService: ElectronService) {}

  minimize() {
    console.log('minimize');
    this.electronService.ipc.send('minimize');
    // this.electronService.send('minimize');
  }

  maximize() {
    this.electronService.ipc.send('maximize');
  }

  unmaximize() {
    this.electronService.ipc.send('unmaximize');
  }

  close() {
    this.electronService.ipc.send('close');
  }
}
