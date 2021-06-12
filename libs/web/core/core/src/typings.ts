import { AppPlatform } from './app/core/services/electron.service';

export {};

declare global {
  interface Window {
    electron: {
      platform: AppPlatform;
    };
  }
}
