import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  isElectron = false;
  platform: AppPlatform;

  constructor() {
    this.isElectron = !!(window && window.electron && window.electron.platform);
    this.platform = this.isElectron ? window.electron.platform : AppPlatform.WEB;
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
