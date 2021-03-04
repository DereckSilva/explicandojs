// Operadores

function operadores(primeiroNumero, segundoNumero){
    soma = primeiroNumero + segundoNumero;
    subtracao = primeiroNumero - segundoNumero;
    multiplicacao = primeiroNumero * segundoNumero;
    divisao = primeiroNumero / segundoNumero;
    resto = primeiroNumero % segundoNumero;

    console.log(soma);
    console.log(subtracao);
    console.log(multiplicacao);
    console.log(divisao);
    console.log(resto);
    return primeiroNumero, segundoNumero;
}

operadores(10, 5); // conforme o parametro que for passado, vamos ter um certo resultado conforme os operadores;
console.log();

numero = 5;
if(numero % 2 == 0){//verificando se o número é par ou ímpar
    // estrutura de condição
    console.log("Número par")
}else{
    console.log("Número ímpar")
}
console.log();

// concatenação com o sinal de + 

var nome = "Dereck";
var numero2;
console.log(nome + " tem 21 anos de idade"); //concatenando duas strings
console.log(nome + " tem " + 21 + " anos de idade");// concatenando com strings e number
console.log(nome + " Masculino: " + true); // concatenando com boolean
console.log(nome + null);// Derecknull
console.log(nome + numero2); // Dereckunderfined
console.log();

// valor verdadeiro carrega 1 com ele
//valores falsos carregam 0
console.log(5 + true); //6
console.log(true + null); //1
console.log(null + false); //0
console.log(9 + numero2); //NaN, ou seja, não é um número, pois underfined não carrega nenhum valor com ele
console.log();

// operador aritmético e atribuição

numero3 = 10;
valor = 2;
valor += numero3; //12 mesma coisa que -> valor = valor - numero3;
// -= *= /=
console.log(valor);