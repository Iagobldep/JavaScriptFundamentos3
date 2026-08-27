class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log("Sou uma pessoam, meu nome é ${this.nome}");
    }
}

class Professor extends Pessoa {
    constructor(nome) {
        super(nome);
    }

    apresentar() {
        console.log("Sou um professor, meu nome é ${this.nome}");
    }
}

class Aluno extends Pessoa {
    constructor(nome) {
        super(nome);
    }

    apresentar() {
        console.log(`Sou um aluno, meu nome é ${this.nome}`);
    }
}

const aluno = new Aluno("iago");

aluno.apresentar()