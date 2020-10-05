import { MatSelectIconModule } from '@angular-material-extensions/select-icon';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterModule.forRoot([], {
      initialNavigation: 'enabled'
    }),
    Angulartics2Module.forRoot(),
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSelectIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
