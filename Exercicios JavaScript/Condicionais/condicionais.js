
// Estrutura condicional
// Temos condições e decidimos os caminhos que vamos seguir na estrutura condicional

/*
    IF          -> SE (se chover......)
    ELSE        -> SENÃO (senão.......)
    ELSE IF     -> SENÃO SE
    SWITCH/CASE -> SWITCH (como se fosse um menu de opções, cada case é uma opção)
*/

let nome = prompt("Digite seu nome: ");
console.log(nome);

// Exemplos:
// 1. Sistema de verificação de temperatura
// tudo que é digitado através do prompt, é recebido como tipo de texto
// então vamos converter para number (número) para garantir que a validação não tenha problema

// let temperatura = Number (prompt("Digite uma temperatura: "));

// if (temperatura < 20) {
//     console.log(Está frio);
// } else {
//     console.log("Está calor!");
// }

// 2. Verificar o nível da bateria
// let bateria = Number(prompt("Digite o nível da bateria (%)"));

// if(bateria <= 30) {
//     alert("Bateria está fraca!");
//         else {
//     alert("Bateria está carregada!");
    
//     }
// }
let tipoUsuario = prompt("Digite o tipo do usúario (admin, cliente)");

if(tipoUsuario == "admin") {
    console.log("Acesso total ao sistema");

else if(tipoUsuario == "cliente") {
    console.log("Acesso total ao sistema");

else {


    console.log("Tipo inválido")
    
}