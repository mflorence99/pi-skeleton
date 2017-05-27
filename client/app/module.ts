import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FourOhFourPageComponent } from 'pi-lib/pages/404-page';
import { GPIOPageComponent } from './pages/gpio/page';
import { GPIOPageModule } from './pages/gpio/module';
import { GPIOPinsEffects } from './effects/gpio-pins';
import { GPIOPinsService } from './services/gpio-pins';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NoopPageComponent } from './pages/noop/page';
import { NoopPageModule } from './pages/noop/module';
import { PiModule } from 'pi-lib';
import { RootComponent } from './pages/root';
import { RouterModule } from '@angular/router';
import { RouterStoreModule } from '@ngrx/router-store';
import { SidebarComponent } from './pages/sidebar';
import { SplashPageComponent } from './pages/splash/page';
import { SplashPageModule } from './pages/splash/module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

/**
 * pi-lib demo app module
 */

const COMPONENTS = [
  RootComponent,
  SidebarComponent
];

const MODULES_ANGULAR = [
  BrowserAnimationsModule,
  BrowserModule,
  CommonModule,
  FlexLayoutModule,
  HttpModule,
  RouterModule
];

const MODULES_EXTERNAL = [
  LocalStorageModule.withConfig({
      prefix: 'pi-skeleton',
      storageType: 'localStorage'
    })
];

const MODULES_INTERNAL = [
  GPIOPageModule,
  NoopPageModule,
  PiModule,
  SplashPageModule
];

const ROUTES = [
  {path: '',                 component: SplashPageComponent},
  {path: 'gpio',             component: GPIOPageComponent},
  {path: 'home',             component: SplashPageComponent},
  {path: 'noop',             component: NoopPageComponent},
  {path: '**',               component: FourOhFourPageComponent}
];

const SERVICES = [
  GPIOPinsService
];

// see: https://www.npmjs.com/package/ngrx-store-freeze
// NOTE: this is recommended, but seems to seriously confuse Webpack and create build errors

// const metaReducers = environment.production?
//   [storeFreeze, combineReducers] : [combineReducers];
// const appStore = compose(...metaReducers)(reducers);

@NgModule({

  bootstrap: [RootComponent],

  declarations: [
    ...COMPONENTS
  ],

  imports: [
    ...MODULES_ANGULAR,
    ...MODULES_EXTERNAL,
    ...MODULES_INTERNAL,
    EffectsModule.run(GPIOPinsEffects),
    RouterModule.forRoot(ROUTES, { useHash: true }),
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
        maxAge: 5
      })
  ],

  providers: [
    ...SERVICES
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class RootModule { }
