class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }

    create(model, price) {
        const car = this.getCar(model);

        if(!Boolean(car)) {
            const newCar = new Car(model, price);

            this.cars.push(newCar);
            return newCar;
        }

        return car;
    }
}

const factory = new CarFactory();

const bwmX5 = factory.create('bmw', 10000);
const audiA6 = factory.create('audi', 20000);
const bwmX6 = factory.create('bmw', 15000);

console.log('---', factory.cars);
