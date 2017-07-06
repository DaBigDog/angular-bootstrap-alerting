import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Alert } from '../alert/alert';
import { Guid } from '../alert/Guid'

@Injectable()
export class AlertService {


    private alertSubject: Subject<Alert> = new Subject<Alert>();

    public alertError(errorMessage: string) {

        this.setAlert("alert-danger", "Warning - An Error Occurred", errorMessage);
    }

    public alertWarning(warningMessage: string) {
        this.setAlert("alert-warning", "Warning", warningMessage);
    }

    public alertInfo(infoMessage: string) {
        this.setAlert("alert-info", "Information", infoMessage);
    }

    public alertSuccess(successMessage: string) {
        this.setAlert("alert-success", "Success", successMessage);
    }

    public popAlert(alertType: string, title: string, message: string) {
        this.setAlert(alertType, title, message);
    }


    private setAlert(bannerClass: string, title: string, message: string) {

        let alert: Alert = new Alert();
        alert.Title = title;
        alert.Message = message;
        alert.BannerClass = bannerClass;
        alert.Id = Guid.newGuid();

        this.alertSubject.next(alert); // set value and alert subscribers
    }

    getAlert(): Observable<Alert> {
        return this.alertSubject.asObservable();
    }
} 