interface Vehicle {
    startEngine(): string;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(): string {
        return `The engine of the ${this.year} ${this.make} ${this.model} is now running.`;
    }
}

// Example usage
let myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.startEngine());