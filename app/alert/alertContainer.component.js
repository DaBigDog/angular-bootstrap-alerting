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
var AlertContainerComponent = (function () {
    function AlertContainerComponent(alertService) {
        var _this = this;
        this.alertService = alertService;
        this.alerts = new Array();
        this.alertService.getAlert().subscribe(function (alert) {
            _this.addAlert(alert);
        });
    }
    AlertContainerComponent.prototype.ngOnInit = function () {
    };
    AlertContainerComponent.prototype.addAlert = function (alert) {
        this.alerts.push(alert);
    };
    // remove alert from array/view
    AlertContainerComponent.prototype.removeAlert = function (event) {
        if (0 < this.alerts.length) {
            var index = this.alerts.findIndex(function (x) { return x.Id === event.Id; });
            if (index !== -1) {
                this.alerts.splice(index, 1);
            }
        }
    };
    Object.defineProperty(AlertContainerComponent.prototype, "sortedAlerts", {
        get: function () {
            if (100 > this.location) {
                return this.alerts;
            }
            else {
                return this.alerts.slice().reverse();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertContainerComponent.prototype, "pagePosition", {
        get: function () {
            if (undefined === this.location || null === this.location) {
                this.location = alert_location_enums_1.AlertLocation.TopCenter;
            }
            var position = "";
            switch (this.location) {
                case alert_location_enums_1.AlertLocation.BottomCenter:
                    position = "alert-bottom-center";
                    break;
                case alert_location_enums_1.AlertLocation.BottomLeft:
                    position = "alert-bottom-left";
                    break;
                case alert_location_enums_1.AlertLocation.BottomRight:
                    position = "alert-bottom-right";
                    break;
                case alert_location_enums_1.AlertLocation.TopCenter:
                    position = "alert-top-center";
                    break;
                case alert_location_enums_1.AlertLocation.TopLeft:
                    position = "alert-top-left";
                    break;
                case alert_location_enums_1.AlertLocation.TopRight:
                    position = "alert-top-right";
                    break;
            }
            return position;
        },
        enumerable: true,
        configurable: true
    });
    return AlertContainerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AlertContainerComponent.prototype, "location", void 0);
AlertContainerComponent = __decorate([
    core_1.Component({
        selector: 'alert-container',
        templateUrl: '/app/alert/alertContainer.html'
    }),
    __metadata("design:paramtypes", [alert_service_1.AlertService])
], AlertContainerComponent);
exports.AlertContainerComponent = AlertContainerComponent;
//# sourceMappingURL=alertContainer.component.js.map