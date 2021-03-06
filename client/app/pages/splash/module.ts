import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PiModule } from 'pi-lib';
import { SplashPageComponent } from './page';

/**
 * Splash page module
 */

const COMPONENTS = [
  SplashPageComponent
];

const MODULES = [
  CommonModule,
  FlexLayoutModule,
  PiModule
];

@NgModule({

  declarations: [
    ...COMPONENTS
  ],

  imports: [
    ...MODULES
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class SplashPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SplashPageModule,
      providers: [ ]
    };
  }
}
