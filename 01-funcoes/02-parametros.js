function apresentar(nome)
{
    console.log(`Olá, ${nome}`);
}

apresentar("Iagão de galinha");

function sistema(nome = "Guest456")
{
    console.log(`Olá, ${nome}`);
}

sistema();
sistema("igo");

function somar(numero1, numero2)
{
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
}

somar(10, 5);