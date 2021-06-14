/**
 * This module is responsible on handling all the inter process communications
 * between the frontend to the electron backend.
 */

import { ipcMain } from 'electron';
import { environment } from '../../environments/environment';
import App from '../app';

export default class ElectronEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

// Retrieve app version
ipcMain.handle('get-app-version', (event) => {
  console.log(`Fetching application version... [v${environment.version}]`);

  return environment.version;
});

// Handle App termination
ipcMain.on('close', (event, code) => {
  App.mainWindow.close();
});

ipcMain.on('minimize', (event, code) => {
  App.mainWindow.minimize();
});

ipcMain.on('maximize', (event, code) => {
  App.mainWindow.maximize();
});

ipcMain.on('unmaximize', (event, code) => {
  App.mainWindow.unmaximize();
});

ipcMain.on('isFullScreen', (event, code) => {
  App.mainWindow.isFullScreen();
});
