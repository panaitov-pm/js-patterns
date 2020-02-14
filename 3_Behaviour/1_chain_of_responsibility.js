class MySum {
    constructor(initValue = 42) {
        this.sum = initValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }

    getSum() {
        return this.sum;
    }
}

const sum1 = new MySum();
console.log('---sum1', sum1.add(8).add(5).getSum());

const sum2 = new MySum(0);
console.log('---sum2', sum2.add(8).add(5).getSum());
