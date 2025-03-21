import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { NgxErrorPagesModule } from 'ngx-error-pages';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule, NgxErrorPagesModule.forRoot({
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
        }))]
})
  .catch(err => console.error(err));
