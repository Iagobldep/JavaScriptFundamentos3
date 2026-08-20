class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

class Aluno extends Pessoa{
    constructor(nome, curso){
        super(nome);
        this.curso = curso;
    }
}

const aluno = new Aluno("Jefferson", "Desenvolvimento de Sistemas");
console.log(aluno);