class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return t1 + t2;
            case 'sub':
                return t1 - t2;
            default:
                return NaN;
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    }

    sub(t1, t2) {
        return t1 - t2;
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc();
    }

    operation(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return this.calc.add(t1, t2);
            case 'sub':
                return this.calc.sub(t1, t2);
            default:
                return NaN;
        }
    };
}

const oldCalc = new OldCalc();
const newCalc = new NewCalc();
const calcAdapter = new CalcAdapter();

console.log('---oldCalc', oldCalc.operations(10, 5, 'add'));
console.log('---newCalc', newCalc.add(10, 5));
console.log('---calcAdapter', calcAdapter.operation(15, 10, 'sub'));
console.log('---calcAdapterCalc', calcAdapter.calc.sub(15, 10));

