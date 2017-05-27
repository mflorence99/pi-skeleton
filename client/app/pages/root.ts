import * as router from '@ngrx/router-store';
import * as window from 'pi-lib/reducers/window';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfiguratorService, MediaSizeBreaks } from 'pi-lib/services/configurator';

import { AppState } from '../reducers';
import { AutoUnsubscribe } from 'pi-lib/decorators/auto-unsubscribe';
import { EnvService } from 'pi-lib/services/env';
import { NavigatorItem } from 'pi-lib/components/navigator';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { config } from '../config';
import { toggleSidebar } from 'pi-lib/actions/window';

/**
 * pi-skeleton demo app root
 */

const MEDIA_SIZE_BREAKS: MediaSizeBreaks = {
  large: '(min-width: 1024px)',
  small: '(max-width: 1023px)'
};

const NAVIGATOR_ITEMS: NavigatorItem[] = [
  new NavigatorItem('/home', 'home', 'Welcome!'),
  new NavigatorItem('/gpio', 'calculator', 'GPIO Pins')
];

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'skel-root',
  templateUrl: 'root.html',
  styleUrls: ['root.less']
})

@AutoUnsubscribe()
export class RootComponent {
  routerState: Observable<router.RouterState>;
  windowState: Observable<window.WindowState>;

  /** ctor */
  constructor(configurator: ConfiguratorService,
              env: EnvService,
              private store: Store<AppState>) {
    console.log('<skel-root> loading', config, env);
    this.routerState = store.select(state => state.router);
    this.windowState = store.select(state => state.window);
    // configure the app
    setTimeout(() => {
      configurator.withMediaSizeBreaks(MEDIA_SIZE_BREAKS);
      configurator.withNavigatorItems(NAVIGATOR_ITEMS);
    }, 0);
  }

  /**
   * Toggle the sidebar
   *
   * NOTE: this really belongs in a header component we don't have
   */
  toggleSidebar() {
    this.store.dispatch(toggleSidebar());
  }

}
