import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {BrowserAnimationsModule, provideAnimations, provideNoopAnimations} from '@angular/platform-browser/animations';
import {  provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),BrowserAnimationsModule,BrowserModule,  provideAnimations(),provideNoopAnimations() ,provideHttpClient(
    withInterceptors([authInterceptor])
  )]
};
