var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        return "The engine of the ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is now running.");
    };
    return Car;
}());
// Example usage
var myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.startEngine());
