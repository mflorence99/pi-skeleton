import * as gpio from '../../reducers/gpio-pins';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { listen, unlisten } from '../../actions/gpio-pins';

import { AppState } from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

/**
 * GPIO test page
 */

@Component({
  selector: 'skel-gpio-page',
  styleUrls: ['page.less'],
  templateUrl: 'page.html'
})

export class GPIOPageComponent implements OnInit, OnDestroy {
  gpioPinsState: Observable<gpio.GPIOPinsState>;

  /** ctor */
  constructor(private store: Store<AppState>) {
    this.gpioPinsState = store.select(state => state.gpio);
  }

  // lifecycle methods

  ngOnDestroy() {
    this.store.dispatch(unlisten());
  }

  ngOnInit() {
    this.store.dispatch(listen());
  }

}
