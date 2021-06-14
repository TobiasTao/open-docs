import { Component } from '@angular/core';
import { ElectronService } from '@open-docs/web/core';

@Component({
  selector: 'od-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent {
  isFullscreen = false;

  constructor(private electronService: ElectronService) {}

  onInit() {
    this.getFullscreen();
  }

  getFullscreen() {
    this.electronService.ipc.invoke('isFullscreen').then((result) => {
      this.isFullscreen = result;
    });
  }

  minimize() {
    console.log('minimize');
    this.electronService.ipc.send('minimize');
  }

  maximize() {
    this.electronService.ipc.send('maximize');
    this.isFullscreen = !this.isFullscreen;
  }

  unmaximize() {
    this.electronService.ipc.send('unmaximize');
    this.isFullscreen = !this.isFullscreen;
  }

  close() {
    this.electronService.ipc.send('close');
  }
}
