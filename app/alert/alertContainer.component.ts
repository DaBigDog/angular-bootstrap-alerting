import { Component, Input } from '@angular/core';

import { AlertService } from '../services/alert.service'
import { Alert } from './alert'
import { AlertLocation } from '../alert/alert-location-enums'


@Component({
    selector: 'alert-container',
    templateUrl: '/app/alert/alertContainer.html'
})

export class AlertContainerComponent {

    private alerts: Alert[] = new Array<Alert>();
    @Input() location : AlertLocation;

    constructor(private alertService: AlertService) {

        this.alertService.getAlert().subscribe((alert: Alert) => {
            this.addAlert(alert);
        });

    }

    ngOnInit() {

    }


    private addAlert(alert: Alert): void {

        this.alerts.push(alert);
    }

    // remove alert from array/view
    private removeAlert(event: Alert): void {
        if (0 < this.alerts.length) {
            let index: number = this.alerts.findIndex(x => x.Id === event.Id);
            if (index !== -1) {
                this.alerts.splice(index, 1);
            }
        }
    }


    private get sortedAlerts(): Alert[] {
        if (100 > this.location) {
            return this.alerts
        } else {
            return this.alerts.slice().reverse();
        }
    }


    private get pagePosition(): string {
        if (undefined === this.location || null === this.location) {
            this.location = AlertLocation.TopCenter;
        }

        let position: string = "";
        switch (this.location) {
            case AlertLocation.BottomCenter:
                position = "alert-bottom-center";
                break;
            case AlertLocation.BottomLeft:
                position = "alert-bottom-left";
                break;
            case AlertLocation.BottomRight:
                position = "alert-bottom-right";
                break;
            case AlertLocation.TopCenter:
                position = "alert-top-center";
                break;
            case AlertLocation.TopLeft:
                position = "alert-top-left";
                break;
            case AlertLocation.TopRight:
                position = "alert-top-right";
                break;
        }
        return position;
    }

}
