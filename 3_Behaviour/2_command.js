class MyMath {
    constructor(initValue = 0) {
        this.num = initValue;
    }

    square() {
        return this.num ** 2;
    }

    cube() {
        return this.num ** 3;
    }
}

class Command {
    constructor(target) {
        this.target = target;
        this.commandExecutedList = [];
    }

    execute(command) {
        this.commandExecutedList.push(command);

        return this.target[command]();
    }
}

const x = new Command(new MyMath(2));

console.log('---square', x.execute('square'));
console.log('---cube', x.execute('cube'));
console.log('---square', x.execute('square'));

console.log('---', x.commandExecutedList);


