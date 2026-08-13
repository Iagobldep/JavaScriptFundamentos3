// Tradicional
function multiplicar(a, b)
{
    return a * b;
}

// Anônima
const multiplicarAnonima = function(a, b)
{
    return a * b;
}

const multiplicarArrow = (a, b) =>
{
    return a * b;
}

console.log(multiplicar(2, 4));
console.log(multiplicarAnonima(2, 4));
console.log(multiplicarArrow(2, 4));