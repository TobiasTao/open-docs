import { AppPlatform } from '@open-docs/web/core';
import { IpcRenderer } from 'electron';

// https://github.com/ThorstenHans/ngx-electron/blob/master/projects/ngx-electron/src/lib/typings/electron.window.ts
export interface ElectronWindow extends Window {
  electron: {
    platform: AppPlatform;
    ipc: IpcRenderer;
  };
}
