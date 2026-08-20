const alunos = [
    { nome: "Fernanda", nota: 8 },
    { nome: "Giovanna", nota: 5 },
    { nome: "Giulia", nota: 7 },
    { nome: "Guilherme", nota: 2 },
];

console.log(alunos);
console.log("\n==============================================\n");

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);

aprovados.forEach(aluno => {
    console.log(`O(A) aluno(a) ${aluno.nome} é foda, tirou logo um ${aluno.nota}`);
});