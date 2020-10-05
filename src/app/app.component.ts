import { MatSelectIcon } from '@angular-material-extensions/select-icon';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'select-icon';

  icons: MatSelectIcon[] = [
    {
      url: 'assets/icons/countrys-flags/lebanon.svg',
      value: 'Lebanon'
      // color: 'accent'
    },
    {
      url: 'assets/icons/countrys-flags/germany.svg',
      value: 'Germany',
      color: 'warn'
    },
    {
      url: 'assets/icons/countrys-flags/italy.svg',
      value: 'Italy',
      color: 'primary'
    },
    {
      url: 'assets/icons/countrys-flags/france.svg',
      value: 'France',
      color: 'primary'
    },
    {
      url: 'assets/icons/countrys-flags/spain.svg',
      value: 'Spain',
      color: 'accent'
    },
    {
      url: 'assets/icons/countrys-flags/united-kingdom.svg',
      value: 'United Kingdom',
      color: 'accent'
    }
  ];

  selectIconFC: FormControl = new FormControl();
  selectIconDefault: FormControl = new FormControl(this.icons[0]);


  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    angulartics2GoogleAnalytics.startTracking();
  }

  // tslint:disable-next-line:typedef
  onIconSelected(selectedIcon: MatSelectIcon) {
    console.log('selected icon');
  }
}
