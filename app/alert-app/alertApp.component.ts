import { Component, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertService } from '../services/alert.service'
import { AlertLocation } from '../alert/alert-location-enums'

@Component({
  selector: 'alert-app',
  templateUrl: '/app/alert-app/alertApp.html'
})

export class AlertAppComponent
{

    private alertLocations: any = AlertLocation;

    private pageLocation: AlertLocation = AlertLocation.TopCenter;

    private alertType: string = "alert-success";
    private alertMessage: string = "";
    private alertTitle: string = "";
    private displayTime: number | null | undefined;
    private fadeoutTime: number | null | undefined;

    constructor(private alertService : AlertService) {

    }
    

    ngOnInit() {

    }


    private newAlert(): void {
        this.alertService.popAlert(this.alertType, this.alertTitle, this.alertMessage, this.displayTime, this.fadeoutTime);
    }
   
}
