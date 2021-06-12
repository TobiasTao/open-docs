import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebShellModule } from '@open-docs/web/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WebShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
