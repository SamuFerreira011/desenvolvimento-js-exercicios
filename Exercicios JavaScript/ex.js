
// VARIÁVEIS
/*
    LET -> Quando o valor da varíavel pode mudar, usamos let
    VAR -> Forma antiga - evitar usar (está sendo descontinuado por muitos problemas)
    CONST -> Quando o valor da varíavel NÃO pode mudar
*/

// let nome = "Caio";
// const idade = 25;
// var cidade = "São Paulo";

// // console.log() -> imprime valores na tela
// console.log(nome);
// console.log(idade);

// // trocando informações da variável com let
// nome = "Samuel";
// console.log(nome);

// // trocando informações da variável com const
// // idade = 30;
// // console.log(idade);

// // imprimindo valores juntos
// console.log(nome + cidade);

// // imprimindo valores juntos com texto
// // concatenação
// console.log("Nome: "+ nome + ", cidade: " + cidade);

// // interpolação
// console.log(`Nome: ${nome}, cidade: ${cidade}`);


// TIPOS PRIMITIVOS

// String (texto)
// let mensagem = "Olá, mundo!";
// console.log(typeof mensagem);

// // Number (número)
// let idade = 30;
// let temperatura = 36.5;
// console.log(typeof idade);
// console.log(typeof temperatura);

// // Boolean (booleano -> verdadeiro / falso)
// let estaChovendo = true;
// console.log(typeof estaChovendo);

// // Undefined -> quando não definimos um valor para uma variavel
// let nome;
// console.log(typeof nome);

// // Null / Object -> usado para ausencia intencional de um valor
// let endereco = null;
// console.log(typeof endereco);

// // Conversão dos tipos
// // Conversão implicita (automática)
// let soma = "5" + 3;
// let sub = "5" - 3;

// console.log(typeof soma)
// console.log(soma) // 53 string
// console.log(typeof sub)
// console.log(sub) // 2 number

// // Conversão explicíta
// // converter para número
// let numero = "42";
// let convertido = Number(numero);

// // converter número para string
// let numero2 = 100;
// let texto = String(numero2);


// Operadores Relacionais
/*
    > MAIOR QUE
    < MENOR QUE 
    >= MAIOR OU IGUAL
    <= MENOR OU IGUAL
    == IGUALDADE (ignora tipo)
    === IGUALDADE ESCRITA (Verifica tipo)
    !=  DIFERENTE (Ignora tipo)
    !== DIFERENTE ESTRITO (Verifica tipo)

*/ 

// Exemplo
console.log(10 > 5); // true
console.log(10 < 5); // false

console.log(5 == "5") // true
console.log(5 === "5") // false -> compara valor e tipo

// Operadores Matemáticos
/*
    + SOMA
    - SUBTRAÇÃO
    * MULTPLICAÇÃO
    / DIVISÃO
    % RESTO DA DIVISÃO
    ** POTENCIA
*/

// Exemplo
let a = 10;
let b = 5;

console.log(a + b); // soma
console.log(a - b); // subtração
console.log(a * b); // multiplicação
console.log(a / b); // divisão

// resto
console.log(a % b); // resto da divisão
console.log(a ** b); // potencia

// Operadores Lógicos
/*
    && (AND) -> OPERADOR E
    || (OR) -> OPERADOR OU
    !  (NOT) -> OPERADOR NÃO (negação)
*/

// Operador &&
// só retorna verdadeiro quando todas as condições forem verdadeiras

let num1 = 5
let num2 = 5
let num3 = 10
console.log(num1 == num2 && num3 > num2); // true

// Operador ||
// retorna verdadeiro se pelo menos uma das condições forem verdadeiras
let num4 = 9
console.log(num1 == num4 || num1 == num2); // true

// Operador !(não)
// inverte a condição, se é verdadeiro -> falso e vice e versa
let logado = false;
console.log(!logado); // true

console.log(5 != 3); // true
console.log(!(5 != 3)); // false

// ARRAY (lista)
let frutas = ["maçã", "banana", "uva"];

// imprimindo a lista completa de frutas
console.log(frutas);

// // imprimindo a fruta na posição 1
// console.log(frutas[1]);

// // imprimindo o tamanho da lista
console.log(frutas.length);

// Objetos
let pessoa = {
    nome: "Pedro",
    idade: 25
};

// imprime a pessoa completa
console.log(pessoa);

// imprime somente o nome da pessoa
console.log(pessoa.nome);

// imprime somente a idade da pessoa
console.log(pessoa.idade);

// array de objeto