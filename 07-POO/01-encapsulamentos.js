class ContaBancaria {
    #saldo = 0;

    depositar(valor) {
        if (valor > 0) this.#saldo += valor;
    }

    consultaSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria();
conta.depositar(100)
console.log(conta.consultaSaldo());
conta.depositar(100)
console.log(conta.consultaSaldo());
conta.depositar(100)
console.log(conta.consultaSaldo());