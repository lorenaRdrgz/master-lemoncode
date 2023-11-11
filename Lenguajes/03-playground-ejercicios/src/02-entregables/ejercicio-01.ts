const array1: string[] = ["uno", "dos", "tres", "cuatro"];
const array2: number[] = [1, 2, 3, 4];

//HEAD
const head = <T>([first]: T[]): T => first;
console.log("HEAD: ", head(array1));
console.log("HEAD: ", head(array2));

//TAIL
const tail = <T>([first, ...others]: T[]): T[] => others;
console.log("TAIL: ", tail(array1));
console.log("TAIL: ", tail(array2));

//INIT
const init = (array) => { array.pop(); return array }
console.log("INIT: ", init(array1));
console.log("INIT: ", init(array2));

//LAST
const last = (array) => array[array.length - 1];
console.log("LAST: ", last(array1));
console.log("LAST: ", last(array2));