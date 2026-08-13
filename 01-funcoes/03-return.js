function somar(a, b)
{
    return a + b;
}

const resultado = somar("iago", "bldep")
console.log(resultado);
console.log(somar(10, 5));

let ligado = false;

// function ligaDesliga()
// {
//     if (ligado === false)
//     {
//         ligado = true
//         return "Ligado"
//     }
//     else
//     {
//         ligado = false
//         return "desligado"
//     }
// }

function ligaDesliga()
{
    ligado = !ligado;
    return ligado ? "Ligado" : "Desligado";
}

console.log(ligaDesliga())
console.log(ligaDesliga())