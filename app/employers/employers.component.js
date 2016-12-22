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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var employers_service_1 = require('./employers.service');
var EmployersComponent = (function () {
    function EmployersComponent(formBuilder, employersService, router) {
        this.formBuilder = formBuilder;
        this.employersService = employersService;
        this.router = router;
        this.employers = [];
    }
    EmployersComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getEmployers();
    };
    EmployersComponent.prototype.getEmployers = function () {
        var _this = this;
        this.employersService.getData()
            .subscribe(function (data) {
            var myArray = [];
            for (var key in data) {
                myArray.push(data[key]);
            }
            _this.employers = myArray;
            console.log(_this.employers);
        }, function (error) { return console.log(error); });
    };
    EmployersComponent.prototype.onSubmit = function () {
        var _this = this;
        this.employersService.sendData(this.employerForm.value)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/home']);
        }, function (error) { return console.log(error); });
    };
    EmployersComponent.prototype.initForm = function () {
        this.employerForm = this.formBuilder.group({
            label: new forms_1.FormControl(null),
            info: new forms_1.FormControl(null),
            lat: new forms_1.FormControl(null),
            lng: new forms_1.FormControl(null)
        });
    };
    EmployersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-employers',
            templateUrl: 'employers.component.html',
            styleUrls: ['employers.component.css'],
            providers: [forms_1.FormBuilder, employers_service_1.EmployersService],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, employers_service_1.EmployersService, router_1.Router])
    ], EmployersComponent);
    return EmployersComponent;
}());
exports.EmployersComponent = EmployersComponent;
//# sourceMappingURL=employers.component.js.map