class FuncLib {
  isArray(obj) {
    return Array.isArray(obj);
  }
  isBoolean(obj) {
    return typeof obj === "boolean";
  }
  isDate(obj) {
    return obj instanceof Date;
  }
  isNumber(obj) {
    return typeof obj === "number";
  }
  isString(obj) {
    return typeof obj === "string";
  }
  isFunction(obj) {
    return typeof obj === "function";
  }
  isUndefined(obj) {
    return typeof obj === "undefined";
  }
  isNull(obj) {
    return obj === null ? true : false;
  }
}

let funcLib = new FuncLib();

let user;
let userX = { name: "Max" };
let userY = null;

// console.log(funcLib.isArray({name: 'John'}));
// console.log(funcLib.isBoolean(false));
// console.log(funcLib.isDate(new Date()));
// console.log(funcLib.isNumber(0));
// console.log(funcLib.isString('{ "age": 30 }'));
// console.log(funcLib.isFunction(function mOM(){ return this; }));
// console.log(funcLib.isUndefined(user));
// console.log(funcLib.isNull(user));


function ArrFunc() {

  this.first = function (arr) {
    return arr[0];
  }
  this.last = function (arr) {
    return arr[arr.length - 1];
  }
  this.skip = function (arr, number) {
    return arr.slice(number);
  }
  this.take = function (arr, number) {
    return arr.slice(0, number);
  }

  // this.asChain = function (arr) {
  //   const parent = this;
  //   let resultArr = arr;
  //    function skip(number) {
  //     resultArr = parent.skip(resultArr, number);
  //       return {
  //         skip, take, arr: resultArr
  //       };
  //     }
  //     function take(number) {
  //       resultArr = parent.take(resultArr, number);
  //       return {
  //         skip, take, arr: resultArr
  //       };
  //     }
  //   return {
  //     skip, take, arr: resultArr
  //   };
  // }

  this.chain = function (arr) {
    const lib = this;
    return {
      take(number) {
        arr = lib.take(arr, number);
        return this;
      },

      skip(number) {
        arr = lib.skip(arr, number);
        return this;
      }
    }
  }
}

let arrFunc = new ArrFunc();
let array = [1, 2, 3, 5, 10, 59, 265];

console.log(arrFunc.first(["joe", "monica", "phoebey"]));
console.log(arrFunc.last(["joe", "monica", "phoebey", "jim", "bob", "jill"]));

console.log(arrFunc.skip(array, 1));
console.log(arrFunc.take(array, 5));


