const respostaAPI = '[{"id": 1, "nome": "Vinicius"}, {"id": 2, "nome": "Iago"}]';

const usuarios = JSON.parse(respostaAPI);

usuarios.forEach(aluno => {
    console.log(aluno.nome);
});