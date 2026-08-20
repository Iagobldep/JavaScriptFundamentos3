class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
        this.preco = this.preco.toFixed(2);
    }

    valorAPagar() {
        console.log(`Valor a pagar = R$${this.preco}`)
    }
}

const produto = new Produto("Mouse", 100);
produto.valorAPagar();

for (let i = 0; i <= 29; i++) {
    produto.aplicarDesconto(1);
    produto.valorAPagar();
}
