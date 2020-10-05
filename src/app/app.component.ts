import { MatSelectIcon } from '@angular-material-extensions/select-icon';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'select-icon';

  icons: MatSelectIcon[] = [
    {
      url: 'assets/icons/countrys-flags/lebanon.svg'
      // color: 'accent'
    },
    {
      url: 'assets/icons/countrys-flags/germany.svg',
      color: 'warn'
    },
    {
      url: 'assets/icons/countrys-flags/italy.svg',
      color: 'primary'
    },
    {
      url: 'assets/icons/countrys-flags/france.svg',
      color: 'primary'
    },
    {
      url: 'assets/icons/countrys-flags/spain.svg',
      color: 'accent'
    },
    {
      url: 'assets/icons/countrys-flags/united-kingdom.svg',
      color: 'accent'
    }
  ];

  selectIconFC: FormControl = new FormControl();
  selectIconDefault: FormControl = new FormControl(this.icons[0]);


  constructor(private snackbar: MatSnackBar) {
  }

  onIconSelected(selectedIcon: MatSelectIcon) {
    console.log('selected icon');
  }
}
