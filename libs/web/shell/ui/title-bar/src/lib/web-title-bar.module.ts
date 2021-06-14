import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, SvgIconsModule, MatToolbarModule, MatButtonModule, FlexModule],
  declarations: [TitleBarComponent],
  exports: [TitleBarComponent],
})
export class WebTitleBarModule {}
