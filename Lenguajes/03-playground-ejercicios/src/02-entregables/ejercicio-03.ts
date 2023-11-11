//CLONE
function clone(...source) {
    const copy = { ...source };
    return copy;
}

const original = {
    nombre: "Lorena",
    apellido: "Rodriguez"
}

const copia = clone(original);
console.log(copia);

//MERGE
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    return { ...target, ...source }
}
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}