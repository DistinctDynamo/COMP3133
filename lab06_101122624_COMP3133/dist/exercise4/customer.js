"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Exercise 4");
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    Customer.prototype.getAge = function () {
        console.log(this.age);
    };
    return Customer;
}());
// let customer = new Customer("John","Smith");
// customer.greeter();
exports.default = Customer;
