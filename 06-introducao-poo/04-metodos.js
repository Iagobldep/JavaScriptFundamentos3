class Pessoa {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    };

    apresentar() {
        console.log(`${this.nome} - Nota ${this.nota}`)
    }
}

const aluno1 = new Pessoa("Iago", 10);
const aluno2 = new Pessoa("Guilherme", "ZEEEEEEEEEEERO, BÉEEEEEEEEEEEEEE");
aluno1.apresentar();
aluno2.apresentar();