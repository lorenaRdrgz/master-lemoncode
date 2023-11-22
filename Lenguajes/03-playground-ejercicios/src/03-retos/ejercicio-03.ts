const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const getArrayDepth = <T>(value:T) =>{
    return Array.isArray(value) ? 
      1 + Math.max(0, ...value.map(getArrayDepth)) :
      0;
  }
const aplanarArray = <T> (array:T[])=>{
    const depth = getArrayDepth(array);
    return array.flat(depth);
}

console.log(aplanarArray(sample));