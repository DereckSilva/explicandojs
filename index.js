// Explicando as declarações de variáveis com var e let


// para declarar uma variavel com let e var eu escrevo com qual usar
// depois atribuo um nome de uma variavel 
// logo depois atribuo um valor a ela
var nome = "Dereck"; 
var numero = 21;
console.log(nome, numero);
console.log(); // pular uma linha

let nome1 = "Dereck";
let numero1 = 21;
console.log(nome1, numero1);
console.log();


// a forma de declarar ambas variáveis são iguais, porém tem uma diferença dentro das duas

var nomeAluno = "Andre";
var nomeAluno = "Lucas";
console.log(nomeAluno);
console.log();

// com var eu consigo alterar o valor de uma variável
// quando esse código roda, não irá gerar erro

let nomeAlunoNovo = "João";
//let nomeAlunoNovo = "Mateus";
console.log(nomeAlunoNovo);

// com let eu não consigo alterar o valor de uma variavel usando a palavra chave let antes da variavel
// mas apenas chamando a variavel eu consigo alterar
// esse código com let irá gerar um erro