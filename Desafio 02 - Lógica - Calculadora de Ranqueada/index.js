// Função para calcular o saldo de vitórias e determinar o nível
const rankCalculator = (victories, defeats) => {
  const pdl = victories - defeats;

  // Verifica o nível com base no saldo de vitórias
  if (pdl < 10) return { nivel: "Ferro", pdl };
  else if (pdl >= 10 && pdl <= 20) return { nivel: "Bronze", pdl };
  else if (pdl >= 21 && pdl <= 50) return { nivel: "Prata", pdl };
  else if (pdl >= 51 && pdl <= 80) return { nivel: "Ouro", pdl };
  else if (pdl >= 81 && pdl <= 90) return { nivel: "Diamante", pdl };
  else if (pdl >= 91 && pdl <= 100) return { nivel: "Lendário", pdl };
  else if (pdl >= 101) return { nivel: "Imortal", pdl };
  else return { nivel: "Valor inválido!", pdl };
};

// Chamando a função com vitórias e derrotas
const { nivel, pdl } = rankCalculator(100, 40);

console.log(`O herói tem de saldo de ${pdl}, está no nível de ${nivel}!`);