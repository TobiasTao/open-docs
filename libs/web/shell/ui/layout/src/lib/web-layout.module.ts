import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { WebTitleBarModule } from '@open-docs/web/shell/ui/title-bar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, RouterModule, WebTitleBarModule, MatCardModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class WebLayoutModule {}
