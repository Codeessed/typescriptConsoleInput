"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//console input for the user
var promp = require("prompt-sync")();
//with physical details of user
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//with behavioural details of user and extends class person 
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //saves inputs of the user
    User.prototype.infoInput = function () {
        this.firstName = promp("what is your firstname?");
        this.lastName = promp("what is your lastname?");
        this.age = promp("How old are you?");
        this.weight = promp("what's your weight?");
        this.height = promp("How tall are you?");
        this.saddist = promp("Do you feel saddictic most of the time?");
        this.hardworking = promp("Do you think you are hardworking enough?");
        this.details = {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            weight: this.weight,
            height: this.height,
            saddist: this.saddist,
            hardworking: this.hardworking
        };
        console.log("");
        console.log("THESE ARE YOUR DETAILS BELOW");
        console.log(this.details);
    };
    return User;
}(Person));
var UserObj = new User();
UserObj.infoInput();
