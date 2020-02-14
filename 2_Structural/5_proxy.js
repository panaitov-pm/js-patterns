function networkFetch(url) {
    return `${url} - response from server`;
}

const cache = new Set();

const proxedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const [url] = args;

        if(!cache.has(url)) {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }

        return `${url} - response from cache`;
    },
});


// console.log('---', proxedFetch('angular.io'));
// console.log('---', proxedFetch('react.io'));
// console.log('---', proxedFetch('angular.io'));


// Translation example
let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós',
};

dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if(phrase in target) {
            return target[phrase];
        }

        return phrase;
    },
});

// console.log('---', dictionary['Hello']);
// console.log('---', dictionary['Welcome to Proxy']);


// Валидация с ловушкой «set»
let numbers = [];

numbers = new Proxy(numbers, {
    set(target, prop, value) {
        if(typeof value === 'number') {
            target[prop] = value;
            return true;
        }

        return false;
    },
});

numbers.push(1); // добавилось успешно
numbers.push(2); // добавилось успешно
console.log('Длина: ' + numbers.length); // 2

numbers.push('тест');
