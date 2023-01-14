import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxErrorPagesModule } from 'ngx-error-pages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxErrorPagesModule.forRoot(
      {
        errorPage: {
          backText: 'home',
          backURL: '/home',
          description: 'There was an error displaying this page',
          heading: '500 Page Error',
        },
        notFoundPage: {
          backText: 'home',
          backURL: '/home',
          description: 'This link does not exist',
          heading: '404 Page Not Found',
        },
      },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
