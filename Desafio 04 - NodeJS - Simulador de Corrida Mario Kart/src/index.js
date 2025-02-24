// Lista de personagens
const characters = [
  { NOME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3, PONTOS: 0 },
  { NOME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2, PONTOS: 0 },
  { NOME: "Yoshi", VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3, PONTOS: 0 },
  { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
  { NOME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4, PONTOS: 0 },
  { NOME: "Donkey Kong", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
];

// Função para girar o dado
const rollDice = async () => Math.floor(Math.random() * 6) + 1;

// Sorteia um bloco (RETA, CURVA, CONFRONTO)
const getRandomBlock = async () => ["RETA", "CURVA", "CONFRONTO"][Math.floor(Math.random() * 3)];

// Sorteia um item no confronto
const getRandomItem = () => (Math.random() < 0.5 ? "CASCO" : "BOMBA");

// Log do resultado do dado
const logRollResult = async (name, block, dice, attribute) => {
  console.log(`${name} 🎲 rolou um dado de ${block}: ${dice} + ${attribute} = ${dice + attribute}`);
};

// Função principal da corrida
async function playRaceEngine(player1, player2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    const block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    const dice1 = await rollDice();
    const dice2 = await rollDice();

    let total1 = 0;
    let total2 = 0;

    if (block === "RETA") {
      total1 = dice1 + player1.VELOCIDADE;
      total2 = dice2 + player2.VELOCIDADE;
      await logRollResult(player1.NOME, "velocidade", dice1, player1.VELOCIDADE);
      await logRollResult(player2.NOME, "velocidade", dice2, player2.VELOCIDADE);
    }

    if (block === "CURVA") {
      total1 = dice1 + player1.MANOBRABILIDADE;
      total2 = dice2 + player2.MANOBRABILIDADE;
      await logRollResult(player1.NOME, "manobrabilidade", dice1, player1.MANOBRABILIDADE);
      await logRollResult(player2.NOME, "manobrabilidade", dice2, player2.MANOBRABILIDADE);
    }

    if (block === "CONFRONTO") {
      const power1 = dice1 + player1.PODER;
      const power2 = dice2 + player2.PODER;

      console.log(`${player1.NOME} confrontou com ${player2.NOME}! 🥊`);
      await logRollResult(player1.NOME, "poder", dice1, player1.PODER);
      await logRollResult(player2.NOME, "poder", dice2, player2.PODER);

      if (power1 !== power2) {
        const winner = power1 > power2 ? player1 : player2;
        const loser = power1 < power2 ? player1 : player2;
        const item = getRandomItem();

        console.log(`🎯 ${winner.NOME} venceu o confronto e usou um ${item}!`);

        if (item === "CASCO" && loser.PONTOS > 0) loser.PONTOS--;
        if (item === "BOMBA" && loser.PONTOS > 1) loser.PONTOS -= 2;

        if (Math.random() < 0.5) {
          console.log(`🔥 ${winner.NOME} ganhou um turbo!`);
          winner.PONTOS++;
        }
      } else {
        console.log("🟰 Confronto empatado! Nenhum ponto perdido.");
      }
    }

    if (total1 > total2) {
      console.log(`✅ ${player1.NOME} marcou um ponto!`);
      player1.PONTOS++;
    } else if (total2 > total1) {
      console.log(`✅ ${player2.NOME} marcou um ponto!`);
      player2.PONTOS++;
    } else {
      console.log("❌ Ninguém marcou ponto!");
    }

    console.log("-----------------------------");
  }
}

// Declara o vencedor da corrida
async function declareWinner(player1, player2) {
  console.log("Resultado final:");
  console.log(`${player1.NOME}: ${player1.PONTOS} ponto(s)`);
  console.log(`${player2.NOME}: ${player2.PONTOS} ponto(s)`);

  if (player1.PONTOS > player2.PONTOS) console.log(`🏆 ${player1.NOME} venceu a corrida!`);
  else if (player2.PONTOS > player1.PONTOS) console.log(`🏆 ${player2.NOME} venceu a corrida!`);
  else console.log("🟰 A corrida terminou em empate!");
}

// Função para sortear dois jogadores
const getRandomPlayers = () => {
  const shuffled = characters.sort(() => Math.random() - 0.5);
  return [shuffled[0], shuffled[1]];
};

// Executa a corrida
(async function main() {
  const [player1, player2] = getRandomPlayers();

  console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);
  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();