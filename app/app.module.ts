import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AlertAppComponent }  from './alert-app/alertApp.component';
import { AlertContainerComponent } from './alert/alertContainer.component';
import { AlerterComponent } from './alert/alerter.component';

import { AlertService } from './services/alert.service'


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AlertAppComponent, AlertContainerComponent, AlerterComponent ],
  providers: [ AlertService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
