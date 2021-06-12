import { AppPlatform } from '@open-docs/web/core';
import { IpcRenderer } from 'electron';

export interface ElectronWindow extends Window {
  electron: {
    platform: AppPlatform;
    ipc: IpcRenderer;
  };
}
