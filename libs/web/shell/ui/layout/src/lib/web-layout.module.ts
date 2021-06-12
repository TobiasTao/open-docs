import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { WebTitleBarModule } from '@open-docs/web/shell/ui/title-bar';

@NgModule({
  imports: [CommonModule, RouterModule, WebTitleBarModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class WebLayoutModule {}
