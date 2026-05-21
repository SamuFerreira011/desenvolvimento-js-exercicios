// NÍVEL BÁSICO
// Exercício 1 - Verificar maioridade

let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {
  alert("Você é maior de idade.");
} else {
  alert("Você é menor de idade.");
}

// Exercício 2 - Verificar se um número é positivo ou negativo
// (0 é considerado negativo por hora)

let numero = Number(prompt("Digite um número:"));

if (numero > 0) {
  console.log("O número é positivo.");
} else {
  console.log("O número é negativo.");
}

// Exercício 3 - Aprovação em uma prova

let nota = Number(prompt("Digite a nota do aluno (0 a 100):"));

if (nota >= 60) {
  alert("Aprovado");
} else {
  alert("Reprovado");
}

// Exercício 4 - Verificar se um número é positivo, negativo ou zero

let num = Number(prompt("Digite um número:"));

if (num > 0) {
  alert("O número é positivo.");
} else if (num < 0) {
  alert("O número é negativo.");
} else {
  alert("O número é zero.");
}

// Exercício 5 - Classificação de idade

let idadeClassificacao = Number(prompt("Digite sua idade:"));

if (idadeClassificacao >= 0 && idadeClassificacao <= 12) {
  alert("Você é uma Criança.");
} else if (idadeClassificacao >= 13 && idadeClassificacao <= 17) {
  alert("Você é um Adolescente.");
} else if (idadeClassificacao >= 18) {
  alert("Você é um Adulto.");
} else {
  alert("Idade inválida, insira um número positivo.");
}

// Exercício 6 - Verificar se um número é par ou ímpar

let numeroParity = Number(prompt("Digite um número:"));

if (numeroParity % 2 === 0) {
  alert("O número é par.");
} else {
  alert("O número é ímpar.");
}

// NÍVEL INTERMEDIÁRIO

// Exercício 1 - Calculadora simples

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação desejada (+, -, *, /):");

if (operacao === "+") {
  alert("Resultado: " + (num1 + num2));
} else if (operacao === "-") {
  alert("Resultado: " + (num1 - num2));
} else if (operacao === "*") {
  alert("Resultado: " + (num1 * num2));
} else if (operacao === "/") {
  if (num2 === 0) {
    alert("Erro: divisão por zero não é permitida.");
  } else {
    alert("Resultado: " + (num1 / num2));
  }
} else {
  alert("Operação inválida. Use +, -, * ou /.");
}

// Exercício 2 - Maior entre três números

let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));
let c = Number(prompt("Digite o terceiro número:"));

if (a >= b && a >= c) {
  alert("O maior número é: " + a);
} else if (b >= a && b >= c) {
  alert("O maior número é: " + b);
} else {
  alert("O maior número é: " + c);
}