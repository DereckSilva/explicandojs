// Tipos de dados Js
// string
// number
// boolean

// tipo string: todo texto envolvido por aspas simples ou aspas duplas é uma string em js

var primeiroNome = 'Dereck';
var segundoNome = "Lucas";

// tipo number: todo número em js é do tipo number

var primeiroNumero = 21;
var segundoNumero = 21.75;

// tipo boolean: valores true e false são os usados.

var aprovado = true;
var reprovado = false;

// array

//declarando array
//palavra chave, nome da variavel, sinal de atribuição, valores do meu array

var nomes = ["Dereck", "Thais", "Mateus", "Vitoria"];
console.log(nomes);
console.log();

// acessando um valor dentro do meu array
// colocamos o indice que queremos acessar
// lembrando que a contagem do indice começa com 0.

var estados = ["São Paulo", "Rio de Janeiro", "Bahia", "Espirito Santo"];
console.log(estados); // acessando o array completo
console.log(estados[1]); // acessando apenas o indice 1 = Rio de Janeiro.
console.log();

// alterando valores de um array
var linguagens = ["Java", "Go", "Python", "C#"];
// duas formas de mudar um indice de um array
// no primeiro momento eu estou atribuindo o meu valor para uma variável e depois jogando o valor da variável dentro do array
var linguagem = "Ruby";
linguagens[3] = linguagem; // ["Java", "Go", "Python", "Ruby"] 

// no segundo momento eu estou atribuindo diretamente o valor desejado para um indice do meu array que já foi criado
linguagens[1] = "JavaScript";
console.log(linguagens);// ["Java", "JavaScript", "Python", "Ruby"]
console.log();

//utilizar o array para encapsular diversos valores de um determinado assunto
// como: telefone, e-mail, nomes e etc. 

// underfined

var nome; // aqui não declaramos a variável apenas inicializamos ela.
console.log(nome); // irá imprimir anderfined
console.log();

// null
// sempre usada para quando queremos adiar a atribuição de um valor para a variavel
let idade = null;
idade = 10;
// variavel que possuem o valor null, sempre são 0, podendo assim fazer contas matemáticas
console.log(idade + 1);
console.log();

// const: conceito de const é para que o valor de uma variavel não seja alterada

const endereco = "https://www.google.com/";
// endereco = "https://www.youtube.com/"; com essa tentativa de alterar o valor da variavel o código irá apresentar erro
console.log(endereco);

// const e a ideia de imutabilidade: ou seja, eu defini esse valor com const, será esse até o fim do código