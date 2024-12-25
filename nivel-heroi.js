// Função para classificar o nível do herói
function classificarNivel(nome_heroi, xp_heroi) {
    let nivel;

    if (xp_heroi < 1000) {
        nivel = "Ferro";
    } else if (xp_heroi >= 1001 && xp_heroi <= 2000) {
        nivel = "Bronze";
    } else if (xp_heroi >= 2001 && xp_heroi <= 5000) {
        nivel = "Prata";
    } else if (xp_heroi >= 5001 && xp_heroi <= 7000) {
        nivel = "Ouro";
    } else if (xp_heroi >= 7001 && xp_heroi <= 8000) {
        nivel = "Platina";
    } else if (xp_heroi >= 8001 && xp_heroi <= 9000) {
        nivel = "Ascendente";
    } else if (xp_heroi >= 9001 && xp_heroi <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibindo a mensagem com o nome e o nível do herói
    console.log(`${nome_heroi} está no nível ${nivel}.`);
}

// Solicitando nome e XP do herói ao usuário
const prompt = require('prompt-sync')();  // Usando o pacote prompt-sync para ler entradas do usuário

const nome_heroi = prompt("Digite o nome do herói: ");
const xp_heroi = parseInt(prompt("Digite a quantidade de XP do herói: "), 10);

// Chamando a função para classificar o nível
classificarNivel(nome_heroi, xp_heroi);
