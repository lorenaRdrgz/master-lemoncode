// CONCAT
// const concat = (array1, array2) => {console.log([...array1, ...array2])}; 
const concat = (...arrays) => { console.log(arrays) };

const arrayNum1:string[] = ["uno", "dos", "tres"];
const arrayNum2:string[] = ["cuatro", "cinco", "seis"];
const arrayNum3:string[] = ["siete", "ocho", "nueve"];

concat(...arrayNum1, ...arrayNum2, ...arrayNum3);