import { Component } from '@angular/core';
import { flyInOut } from 'pi-lib/animations';

/**
 * Empty page
 */

@Component({
  animations: [flyInOut()],
  selector: 'skel-noop-page',
  styleUrls: ['page.less'],
  templateUrl: 'page.html'
})

export class NoopPageComponent { }
