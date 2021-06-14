import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webShellRoutes } from './web-shell.routes';
import { WebSvgModule } from '@open-docs/web/shared/ui/svg';
import { WebCoreModule } from '@open-docs/web/core';
import { WebLayoutModule } from '@open-docs/web/shell/ui/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(webShellRoutes),
    WebSvgModule,
    WebCoreModule,
    WebLayoutModule,
    FlexLayoutModule,
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
