let nome = "Gabriel";
let qtdXP = 10001;

if (qtdXP <= 1000) {
  console.log(`O Herói de nome ${nome}, está no nivel de Ferro!`);
} else if (qtdXP > 1000 && qtdXP <= 2000) {
  console.log(`O Herói de nome ${nome}, está no nivel de Bronze!`);
} else if (qtdXP > 2000 && qtdXP <= 5000) {
  console.log(`O Herói de nome ${nome}, está no nivel de Prata!`);
} else if (qtdXP > 5000 && qtdXP <= 7000) {
  console.log(`O Herói de nome ${nome}, está no nivel de Ouro!`);
} else if (qtdXP > 7000 && qtdXP <= 8000) {
  console.log(`O Herói de nome ${nome}, está no nivel de Platina!`);
} else if (qtdXP > 8000 && qtdXP <= 9000) {
  console.log(`O Herói de nome ${nome}, está no nivel de Ascendente!`);
} else if (qtdXP > 9000 && qtdXP <= 10000) {
  console.log(`O Herói de nome ${nome}, está no nivel de Imortal!`);
} else if (qtdXP > 10000) {
  console.log(`O Herói de nome ${nome}, está no nivel de Radiante!`);
} else {
  console.log("Valor Inválido!");
}
