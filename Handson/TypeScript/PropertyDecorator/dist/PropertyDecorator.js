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
function validateEmail(target, propertyKey) {
    let value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    Object.defineProperty(target, propertyKey, {
        get: function () {
            return value;
        },
        set: function (newValue) {
            if (!emailRegex.test(newValue)) {
                throw new Error(`Invalid email format for property '${propertyKey}'.`);
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true,
    });
}
class User {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    validateEmail,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
// Example usage (valid email):
try {
    const validUser = new User("valid@example.com");
    console.log("Valid user created:", validUser);
}
catch (error) {
    console.error("Error creating valid user:", error.message); // Type assertion
}
// Example usage (invalid email):
try {
    const invalidUser = new User("invalid-email");
    console.log("Invalid user created:", invalidUser);
}
catch (error) {
    if (error instanceof Error) { // Type guard
        console.error("Error creating invalid user:", error.message);
    }
}
//Example usage (invalid email 2):
try {
    const invalidUser2 = new User("invalid@email");
    console.log("Invalid user created:", invalidUser2);
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error creating invalid user 2: ", error.message);
    }
}
//Example usage (invalid email 3):
try {
    const invalidUser3 = new User("invalid@.email.");
    console.log("Invalid user created:", invalidUser3);
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error creating invalid user 3: ", error.message);
    }
}
