import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webShellRoutes } from './web-shell.routes';
import { WebSvgModule } from '@open-docs/web/shared/ui/svg';
import { WebCoreModule } from '@open-docs/web/core';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(webShellRoutes), WebSvgModule, WebCoreModule],
  exports: [RouterModule],
})
export class WebShellModule {}
