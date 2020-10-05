<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.jsdelivr.net/gh/angular-material-extensions/select-icon@master/assets/angular-material-extensions-logo.svg">
</p>

# @angular-material-extensions/select-icon - Angular component that allows to select an option in form of a material design icon button

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Fselect-icon.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Fselect-icon)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/select-icon)
[![docs: typedoc](https://img.shields.io/badge/docs-typedoc-4D0080.svg)](https://angular-material-extensions.github.io/select-icon/doc/index.html)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/angular-material-extensions/select-icon.svg?branch=master)](https://travis-ci.org/angular-material-extensions/select-icon)
[![codecov](https://codecov.io/gh/angular-material-extensions/select-icon/branch/master/graph/badge.svg)](https://codecov.io/gh/angular-material-extensions/select-icon)
[![dependency Status](https://david-dm.org/angular-material-extensions/select-icon/status.svg)](https://david-dm.org/angular-material-extensions/select-icon)
[![devDependency Status](https://david-dm.org/angular-material-extensions/select-icon/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/select-icon#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/select-icon.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/select-icon.svg?style=flat-square)](https://github.com/angular-material-extensions/select-icon/blob/master/LICENSE)

<p align="center">
  <img alt="@angular-material-extensions/select-icon demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/select-icon/HEAD/assets/v1.0.0/demo.gif">
</p>


## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/select-icon/issues)

If you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Components](#components)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Run Demo App Locally](#run-demo-app-locally)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://angular-material-extensions.github.io/select-country)

View all the directives and components in action at [https://angular-material-extensions.github.io/select-country](https://angular-material-extensions.github.io/select-country)

<a name="components"/>

## Library's components
- `<mat-select-icon>` used to display the main component

---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) developed and tested with `10.x`

---

<a name="installation"/>

##  [Installation](https://angular-material-extensions.github.io/select-icon/getting-started)

## 1. Install via *ng add*. (Recommended)

If Angular Material Design is not setup, just run `ng add @angular/material` [learn more](https://material.angular.io/guide/getting-started)

Now add the library via the `angular schematics`
```shell
ng add @angular-material-extensions/select-icon
```

## 2. Install via *npm*. (Alternative) 

Now install `@angular-material-extensions/select-icon` via:
```shell
npm install --save @angular-material-extensions/select-icon
```


### Import the library

If you installed the library via angular schematics, you can skip this step


```typescript
import { MatSelectIconModule } from '@angular-material-extensions/select-icon'; 

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatSelectIconModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application like for lazy loading import ` MatSelectIconModule ` into your feature module:


<a name="api"/>

## API

### `<mat-select-icon>`  used to display the main component - [see the demo examples](https://angular-material-extensions.github.io/select-icon/examples)

| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| icons      | `Input()`  | `MatSelectIcon[]`    | - |  the icons to display
| value      | `Input()`  | `MatSelectIcon`    | - |  the selected value
| onIconSelected  | `Output()` | `EventEmitter<MatSelectIcon>`    | - | emits the selected icon as object (see the interface below)


```typescript
interface MatSelectIcon {
  url: string;
  value?: any;
  color?: ThemePalette;
  tags?: string[]; // todo: 10.2020
}
```


<a name="usage"/>

## [Usage](https://angular-material-extensions.github.io/select-icon)

```html
<mat-select-icon [icons]="icons" (onIconSelected)="onIconSelected($event)"></mat-select-icon>
```

```typescript

import { MatSelectIcon } from '@angular-material-extensions/select-icon';

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

  onIconSelected(selectedIcon: MatSelectIcon) {
    console.log('selected icon');
  }
```

<p align="center">
  <img alt="@angular-material-extensions/select-icon demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/select-icon/HEAD/assets/v1.0.0/demo.png">
</p>


#### with reactive forms

```html
<mat-select-icon [icons]="icons" [formControl]="selectIconFC"></mat-select-icon>
```

```typescript

import { MatSelectIcon } from '@angular-material-extensions/select-icon';

selectIconFC: FormControl = new FormControl();
```


with selected value

```html
<mat-select-icon [icons]="icons" [formControl]="selectIconDefault"></mat-select-icon>
```

```typescript

import { MatSelectIcon } from '@angular-material-extensions/select-icon';

selectIconDefault: FormControl = new FormControl(this.icons[0]);
```



<a name="run-demo-app-locally"/>

###  Run Demo App Locally

Build the library

```bash
$ npm run build:lib
```

Serve the demo app

```bash
$ npm start
```



## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/fab-menu](https://github.com/angular-material-extensions/fab-menu)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/select-icon/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](https://raw.githubusercontent.com/angular-material-extensions/select-icon/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2020 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT) <p align="center">
                                                                                                            <img alt="angular-material-extensions's logo"
                                                                                                             height="92px" width="92px" style="text-align: center;" 
                                                                                                             src="https://cdn.jsdelivr.net/gh/angular-material-extensions/select-icon@master/assets/badge_made-in-germany.svg">
                                                                                                          </p>

