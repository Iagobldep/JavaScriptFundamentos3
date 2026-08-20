const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter((numero) => numero % 2 === 0);
const impares = numeros.filter((numero) => numero % 2 === 1);

console.log(pares);
console.log(impares);