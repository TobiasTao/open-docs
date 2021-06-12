import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { ElectronWindow } from './electron.interface';

declare let window: ElectronWindow;

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  isElectron: boolean;
  platform: AppPlatform = AppPlatform.WEB;
  ipc!: IpcRenderer;

  constructor() {
    this.isElectron = !!(window && window.electron && window.electron.platform);
    if (this.isElectron) {
      this.platform = window.electron.platform;
      // https://stackoverflow.com/questions/52772556/angular-6-cannot-resolve-fs-and-path-for-using-electron/57197537#57197537
      this.ipc = window.electron.ipc;
    }
  }
}

export enum AppPlatform {
  AIX = 'aix',
  DARWIN = 'darwin',
  FREEBSD = 'freebsd',
  LINUX = 'linux',
  OPENBSD = 'openbsd',
  SUNOS = 'sunos',
  WIN32 = 'win32',
  WEB = 'web',
}
