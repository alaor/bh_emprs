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
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
var employers_service_1 = require('../employers/employers.service');
var HomeComponent = (function () {
    function HomeComponent(employersService) {
        this.employersService = employersService;
        this.title = 'Meu primeiro mapa';
        this.lat = -20.626959;
        this.lng = -45.154981;
        this.markers = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getEmployers();
    };
    HomeComponent.prototype.getEmployers = function () {
        var _this = this;
        this.employersService.getData()
            .subscribe(function (data) {
            for (var key in data) {
                _this.markers.push({
                    lat: Number(data[key].lat),
                    lng: Number(data[key].lng),
                    info: data[key].info,
                    label: data[key].label,
                    draggable: false
                });
            }
        }, function (error) { return console.log(error); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            providers: [employers_service_1.EmployersService],
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [employers_service_1.EmployersService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map