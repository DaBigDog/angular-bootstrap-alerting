"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var alert_service_1 = require("../services/alert.service");
var alert_location_enums_1 = require("../alert/alert-location-enums");
var AlertAppComponent = (function () {
    function AlertAppComponent(alertService) {
        this.alertService = alertService;
        this.alertLocations = alert_location_enums_1.AlertLocation;
        this.pageLocation = alert_location_enums_1.AlertLocation.TopCenter;
        this.alertType = "alert-success";
        this.alertMessage = "";
        this.alertTitle = "";
    }
    AlertAppComponent.prototype.ngOnInit = function () {
    };
    AlertAppComponent.prototype.newAlert = function () {
        this.alertService.popAlert(this.alertType, this.alertTitle, this.alertMessage);
    };
    return AlertAppComponent;
}());
AlertAppComponent = __decorate([
    core_1.Component({
        selector: 'alert-app',
        templateUrl: '/app/alert-app/alertApp.html'
    }),
    __metadata("design:paramtypes", [alert_service_1.AlertService])
], AlertAppComponent);
exports.AlertAppComponent = AlertAppComponent;
//# sourceMappingURL=alertApp.component.js.map