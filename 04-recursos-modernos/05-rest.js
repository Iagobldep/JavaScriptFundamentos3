function somar(...numeros){
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(somar(10, 20, 30, 40, 50));