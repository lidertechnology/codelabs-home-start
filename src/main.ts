import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withViewTransitions } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [ 
    provideRouter(routeConfig, withViewTransitions()) // Esta linea importa la configuracion de rutas del archivo routes.ts
   ]
  }).catch(err => console.error(err));
