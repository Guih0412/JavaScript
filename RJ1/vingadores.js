const capitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    armaSecundaria: "Gadgets táticos",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        return "Nome: " + this.nome +
            "\nCodinome: " + this.codinome +
            "\nArma principal: " + this.armaPrincipal +
            "\nArma secundária: " + this.armaSecundaria +
            "\nVelocidade: " + this.velocidade +
            "\nForça: " + this.forca +
            "\nResistência: " + this.resistencia;
    }
};

const homemAranha = {
    nome: "Peter Parker",
    codinome: "Homem-Aranha",
    armaPrincipal: "Lança-teias",
    armaSecundaria: "Agilidade e sentido aranha",
    velocidade: 92,
    forca: 78,
    resistencia: 82,
    descricao: function () {
        return "Nome: " + this.nome +
            "\nCodinome: " + this.codinome +
            "\nArma principal: " + this.armaPrincipal +
            "\nArma secundária: " + this.armaSecundaria +
            "\nVelocidade: " + this.velocidade +
            "\nForça: " + this.forca +
            "\nResistência: " + this.resistencia;
    }
};

const thanos = {
    nome: "Thanos",
    codinome: "Thanos",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "Poder cósmico",
    velocidade: 70,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return "Nome: " + this.nome +
            "\nCodinome: " + this.codinome +
            "\nArma principal: " + this.armaPrincipal +
            "\nArma secundária: " + this.armaSecundaria +
            "\nVelocidade: " + this.velocidade +
            "\nForça: " + this.forca +
            "\nResistência: " + this.resistencia;
    }
};

const hulk = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Força bruta",
    armaSecundaria: "Raiva descontrolada",
    velocidade: 60,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return "Nome: " + this.nome +
            "\nCodinome: " + this.codinome +
            "\nArma principal: " + this.armaPrincipal +
            "\nArma secundária: " + this.armaSecundaria +
            "\nVelocidade: " + this.velocidade +
            "\nForça: " + this.forca +
            "\nResistência: " + this.resistencia;
    }
};

const homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura de ferro",
    armaSecundaria: "Reatores repulsores",
    velocidade: 75,
    forca: 70,
    resistencia: 85,
    descricao: function () {
        return "Nome: " + this.nome +
            "\nCodinome: " + this.codinome +
            "\nArma principal: " + this.armaPrincipal +
            "\nArma secundária: " + this.armaSecundaria +
            "\nVelocidade: " + this.velocidade +
            "\nForça: " + this.forca +
            "\nResistência: " + this.resistencia;
    }
};

const thor = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Mjolnir",
    armaSecundaria: "Tempestade/Relâmpago",
    velocidade: 80,
    forca: 95,
    resistencia: 90,
    descricao: function () {
        return "Nome: " + this.nome +
            "\nCodinome: " + this.codinome +
            "\nArma principal: " + this.armaPrincipal +
            "\nArma secundária: " + this.armaSecundaria +
            "\nVelocidade: " + this.velocidade +
            "\nForça: " + this.forca +
            "\nResistência: " + this.resistencia;
    }
};

let vingadores = [capitaoAmerica, homemAranha, thanos, hulk, homemDeFerro, thor];

console.log("====== CONFRONTO ENTRE VINGADORES ======");

for (let v1 = 0; v1 < vingadores.length; v1++) {
    for (let v2 = v1 + 1; v2 < vingadores.length; v2++) { // evita confrontos duplicados e v1 === v2
        let vingador1 = vingadores[v1];
        let vingador2 = vingadores[v2];

        let vitoriasVingador1 = 0;
        let vitoriasVingador2 = 0;

        console.log(`------- ${vingador1.codinome} vs ${vingador2.codinome} -------\n`);

        console.log(`--- Descrição do ${vingador1.codinome} ---`);
        console.log(vingador1.descricao());

        console.log(`\n--- Descrição do ${vingador2.codinome} ---`);
        console.log(vingador2.descricao());


        console.log("\n--- Confrontos ---");

        // Força
        if (vingador1.forca > vingador2.forca) {
            console.log(`Força: ${vingador1.codinome} vence!`);
            vitoriasVingador1++;
        } else if (vingador2.forca > vingador1.forca) {
            console.log(`Força: ${vingador2.codinome} vence!`);
            vitoriasVingador2++;
        } else {
            console.log("Força: Empate!");
        }

        // Velocidade
        if (vingador1.velocidade > vingador2.velocidade) {
            console.log(`Velocidade: ${vingador1.codinome} vence!`);
            vitoriasVingador1++;
        } else if (vingador2.velocidade > vingador1.velocidade) {
            console.log(`Velocidade: ${vingador2.codinome} vence!`);
            vitoriasVingador2++;
        } else {
            console.log("Velocidade: Empate!");
        }

        // Resistência
        if (vingador1.resistencia > vingador2.resistencia) {
            console.log(`Resistência: ${vingador1.codinome} vence!`);
            vitoriasVingador1++;
        } else if (vingador2.resistencia > vingador1.resistencia) {
            console.log(`Resistência: ${vingador2.codinome} vence!`);
            vitoriasVingador2++;
        } else {
            console.log("Resistência: Empate!");
        }

        // Resultado final
        if (vitoriasVingador1 > vitoriasVingador2) {
            console.log(`\n>>> Resultado final: ${vingador1.codinome} vence com ${vitoriasVingador1} vitórias!`);
        } else if (vitoriasVingador2 > vitoriasVingador1) {
            console.log(`\n>>> Resultado final: ${vingador2.codinome} vence com ${vitoriasVingador2} vitórias!`);
        } else {
            console.log(`\n>>> Resultado final: Empate com ${vitoriasVingador1} vitórias cada!`);
        }

        console.log("========================================");
    }
}
