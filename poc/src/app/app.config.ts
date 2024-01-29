import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { fileFeatureKey, fileFeatureReducer } from './shared/store/reducer';
import * as fileEffect from './shared/store/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),
    provideEffects(fileEffect),
     provideStore(reducers, { metaReducers }),
     provideState(fileFeatureKey,fileFeatureReducer),
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};



