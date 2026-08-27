# JavaScriptFundamentos03

Continuação dos estudos de JavaScript com foco em funções, métodos de arrays, objetos, JSON e introdução à Programação Orientada a Objetos.

## Objetivos

Ao final deste projeto, o aluno deverá ser capaz de:

- Criar e utilizar funções;
- Trabalhar com parâmetros, argumentos e retorno;
- Utilizar Arrow Functions;
- Manipular arrays com métodos modernos;
- Criar e manipular objetos;
- Trabalhar com arrays de objetos;
- Entender o uso de `this`;
- Converter objetos para JSON e JSON para objetos;
- Criar classes;
- Utilizar `constructor`;
- Instanciar objetos com `new`;
- Criar atributos e métodos;
- Compreender os conceitos iniciais de encapsulamento, herança e polimorfismo.

## Estrutura

```text
JavaScriptFundamentos03/
├── 01-funcoes/
├── 02-metodos-arrays/
├── 03-objetos/
├── 04-recursos-modernos/
├── 05-json/
├── 06-introducao-poo/
├── 07-poo/
├── exercicios/
└── desafios/
```

## Como executar

Abra o terminal na pasta do projeto e execute:

```bash
node nome-do-arquivo.js
```

Exemplo:

```bash
node 01-funcoes/01-funcao-simples.js
```

## Conteúdos

### 1. Funções

Funções permitem organizar e reutilizar códigos.

```javascript
function saudacao() {
    console.log("Olá!");
}

saudacao();
```

Função com parâmetros:

```javascript
function apresentar(nome) {
    console.log(`Olá, ${nome}!`);
}

apresentar("Maria");
```

Função com retorno:

```javascript
function somar(a, b) {
    return a + b;
}

let resultado = somar(10, 5);
console.log(resultado);
```

### 2. Métodos de Arrays

Nesta etapa serão utilizados:

- `forEach()`
- `map()`
- `filter()`
- `find()`
- `findIndex()`
- `some()`
- `every()`
- `reduce()`

### 3. Objetos

```javascript
const aluno = {
    nome: "Carlos",
    idade: 18,
    nota: 8
};

console.log(aluno.nome);
```

### 4. Recursos modernos

Serão estudados:

- Desestruturação;
- Spread Operator;
- Rest Operator;
- Parâmetros padrão.

### 5. JSON

```javascript
const aluno = {
    nome: "Ana",
    nota: 9
};

const json = JSON.stringify(aluno);
console.log(json);
```

### 6. Introdução à POO

Uma classe funciona como um modelo para criação de objetos.

```javascript
class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    apresentar() {
        console.log(`Aluno: ${this.nome}`);
    }
}

const aluno1 = new Aluno("Maria", 9);
aluno1.apresentar();
```

### 7. Conceitos de POO

Serão apresentados:

- Classe;
- Objeto;
- Instância;
- Atributo;
- Método;
- Encapsulamento;
- Herança;
- Polimorfismo.

## Exercícios

Resolva os exercícios disponíveis na pasta `exercicios`.

Evite consultar os códigos prontos antes de tentar desenvolver sua própria solução.

## Desafios

Ao final, desenvolva os desafios integradores utilizando os conteúdos estudados.

## Checklist

- [x] Funções
- [ ] Parâmetros
- [x] Return
- [x] Arrow Functions
- [x] forEach
- [x] map
- [x] filter
- [x] find
- [x] reduce
- [x] Objetos
- [x] Arrays de objetos
- [x] this
- [x] Desestruturação
- [x] Spread
- [x] JSON
- [x] Classes
- [x] Constructor
- [x] Instâncias
- [x] Encapsulamento
- [x] Herança
- [x] Polimorfismo

## Conclusão

Este projeto prepara a base necessária para avançar posteriormente para JavaScript assíncrono, Node.js, Express e desenvolvimento de APIs REST.