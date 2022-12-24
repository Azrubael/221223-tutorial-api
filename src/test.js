"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
function Component(id) {
    console.log('init @Component');
    return function (target) {
        console.log('run @Component');
        target.prototype.id = id;
    };
}
function Logger() {
    console.log('init @Logger');
    return function (target) {
        console.log('run @Logger');
    };
}
function Method(target, propertyKey, propertyDescriptor) {
    console.log(propertyKey);
    var oldValue = propertyDescriptor.value;
    propertyDescriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var q = args[0] * 10;
        console.log("The propertyDescriptor: ".concat(q, "\nThe old value of propertyDescriptor: \n ").concat(oldValue));
        return q;
    };
}
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.updateId = function (newId) {
        this.id = newId;
        return this.id;
    };
    __decorate([
        Method
    ], User.prototype, "updateId");
    User = __decorate([
        Logger(),
        Component(69)
    ], User);
    return User;
}());
exports.User = User;
console.log(new User().id);
console.log('The updatedId(2) =', new User().updateId(2));
