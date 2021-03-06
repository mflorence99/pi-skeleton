import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NoopPageComponent } from './page';
import { PiModule } from 'pi-lib';

/**
 * Noop page module
 */

const COMPONENTS = [
  NoopPageComponent
];

const MODULES = [
  CommonModule,
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

export class NoopPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NoopPageModule,
      providers: [ ]
    };
  }
}
