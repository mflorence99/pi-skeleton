import { Component } from '@angular/core';
import { flyInOut } from 'pi-lib/animations';

/**
 * Empty page
 */

@Component({
  animations: [flyInOut()],
  selector: 'skel-splash-page',
  styleUrls: ['page.less'],
  templateUrl: 'page.html'
})

export class SplashPageComponent { }
