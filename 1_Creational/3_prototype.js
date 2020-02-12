const car = {
    wheels: 4,

    init() {
        console.log(`Hello, I am beautiful car. I have ${this.wheels} wheels and my owner ${this.owner}`);
    },
};

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Dima',
    },
});

carWithOwner.init();
