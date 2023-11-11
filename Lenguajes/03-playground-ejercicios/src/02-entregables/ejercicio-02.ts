// CONCAT
// const concat = (array1, array2) => {console.log([...array1, ...array2])}; 
const concat = (...arrays) => { console.log(arrays) };

const array1:string[] = ["uno", "dos", "tres"];
const array2:string[] = ["cuatro", "cinco", "seis"];
const array3:string[] = ["siete", "ocho", "nueve"];

concat(...array1, ...array2, ...array3);