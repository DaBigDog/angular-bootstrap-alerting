import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Alert } from '../alert/alert';
import { Guid } from '../alert/Guid'

@Injectable()
export class AlertService {


    private alertSubject: Subject<Alert> = new Subject<Alert>();

    public alertError(errorMessage: string) {

        this.setAlert("alert-danger", "Warning - An Error Occurred", errorMessage, undefined, undefined);
    }

    public alertWarning(warningMessage: string) {
        this.setAlert("alert-warning", "Warning", warningMessage, undefined, undefined);
    }

    public alertInfo(infoMessage: string) {
        this.setAlert("alert-info", "Information", infoMessage, undefined, undefined);
    }

    public alertSuccess(successMessage: string) {
        this.setAlert("alert-success", "Success", successMessage, undefined, undefined);
    }

    public popAlert(alertType: string, title: string, message: string, displayTime: number, fadeoutTime: number) {
        this.setAlert(alertType, title, message, displayTime, fadeoutTime);
    }


    private setAlert(bannerClass: string, title: string, message: string, displayTime: number, fadeoutTime: number) {

        let alert: Alert = new Alert();
        alert.Title = title;
        alert.Message = message;
        alert.BannerClass = bannerClass;
        alert.Id = Guid.newGuid();

        if (undefined !== displayTime && null !== displayTime) {
            alert.DisplayLengthSeconds = displayTime;
            if (undefined !== fadeoutTime && null !== fadeoutTime) {
                alert.FadeoutLengthSeconds = fadeoutTime;
            }
    }   


        this.alertSubject.next(alert); // set value and alert subscribers
    }

    getAlert(): Observable<Alert> {
        return this.alertSubject.asObservable();
    }
} 