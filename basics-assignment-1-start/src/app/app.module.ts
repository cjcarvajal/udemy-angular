import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertsComponent } from './alerts/alerts.component';
import { WarningAlertComponent } from './warningalert/warningalert.component';
import { SuccessfulAlertComponent } from './successfulalert/successfulalert.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    WarningAlertComponent,
    SuccessfulAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
