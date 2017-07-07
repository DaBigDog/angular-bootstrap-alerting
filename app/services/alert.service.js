"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var alert_1 = require("../alert/alert");
var Guid_1 = require("../alert/Guid");
var AlertService = (function () {
    function AlertService() {
        this.alertSubject = new Subject_1.Subject();
    }
    AlertService.prototype.alertError = function (errorMessage) {
        this.setAlert("alert-danger", "Warning - An Error Occurred", errorMessage, undefined, undefined);
    };
    AlertService.prototype.alertWarning = function (warningMessage) {
        this.setAlert("alert-warning", "Warning", warningMessage, undefined, undefined);
    };
    AlertService.prototype.alertInfo = function (infoMessage) {
        this.setAlert("alert-info", "Information", infoMessage, undefined, undefined);
    };
    AlertService.prototype.alertSuccess = function (successMessage) {
        this.setAlert("alert-success", "Success", successMessage, undefined, undefined);
    };
    AlertService.prototype.popAlert = function (alertType, title, message, displayTime, fadeoutTime) {
        this.setAlert(alertType, title, message, displayTime, fadeoutTime);
    };
    AlertService.prototype.setAlert = function (bannerClass, title, message, displayTime, fadeoutTime) {
        var alert = new alert_1.Alert();
        alert.Title = title;
        alert.Message = message;
        alert.BannerClass = bannerClass;
        alert.Id = Guid_1.Guid.newGuid();
        if (undefined !== displayTime && null !== displayTime) {
            alert.DisplayLengthSeconds = displayTime;
            if (undefined !== fadeoutTime && null !== fadeoutTime) {
                alert.FadeoutLengthSeconds = fadeoutTime;
            }
        }
        this.alertSubject.next(alert); // set value and alert subscribers
    };
    AlertService.prototype.getAlert = function () {
        return this.alertSubject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    core_1.Injectable()
], AlertService);
exports.AlertService = AlertService;
//# sourceMappingURL=alert.service.js.map