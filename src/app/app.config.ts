import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({ app: appReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
