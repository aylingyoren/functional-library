class FuncLib {
    isArray(obj) {
        return Array.isArray(obj);
    }
    isBoolean(obj) {
        return typeof obj === 'boolean';
    }
    isDate(obj) {
        return obj instanceof Date;
    }
    isNumber(obj) {
        return typeof obj === 'number';
    }
    isString(obj) {
        return typeof obj === 'string';
    }
    isFunction(obj) {
        return typeof obj === 'function';
    }
    isUndefined(obj) {
        return typeof obj === 'undefined';
    }
    isNull(obj) {
        return obj === null ? true : false;
    }
}

let funcLib = new FuncLib;

let user;
let userX = { name: 'Max'};
let userY = null;

// console.log(funcLib.isArray({name: 'John'}));
// console.log(funcLib.isBoolean(false));
// console.log(funcLib.isDate(new Date()));
// console.log(funcLib.isNumber(0));
// console.log(funcLib.isString('{ "age": 30 }'));
// console.log(funcLib.isFunction(function mOM(){ return this; }));
// console.log(funcLib.isUndefined(user));
// console.log(funcLib.isNull(user));

class ArrFunc {
    first(arr) {
        return arr[0];
    }
    last(arr) {
        return arr[arr.length - 1];
    }
    skip(arr, number) {}
    take(arr, number) {}
}

let arrFunc = new ArrFunc;

console.log(arrFunc.first(['joe', 'monica', 'phoebey']));
console.log(arrFunc.last(['joe', 'monica', 'phoebey', 'jim', 'bob', 'jill']));