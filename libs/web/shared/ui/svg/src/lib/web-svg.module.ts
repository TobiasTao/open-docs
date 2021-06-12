import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { odWindowControlCloseIcon } from './svg/window-control-close';
import { odWindowControlMinimizeIcon } from './svg/window-control-minimize';
import { odWindowControlMaximizeIcon } from './svg/window-control-maximize';
import { odWindowControlUnmaximizeIcon } from './svg/window-control-unmaximize';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [
        odWindowControlCloseIcon,
        odWindowControlMinimizeIcon,
        odWindowControlMaximizeIcon,
        odWindowControlUnmaximizeIcon,
      ],
    }),
  ],
  exports: [SvgIconsModule],
})
export class WebSvgModule {}
