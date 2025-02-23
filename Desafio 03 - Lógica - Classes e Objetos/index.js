class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "mago") ataque = "magia";
    else if (this.tipo === "guerreiro") ataque = "espada";
    else if (this.tipo === "monge") ataque = "artes marciais";
    else if (this.tipo === "ninja") ataque = "shuriken";

    console.log(`O ${this.tipo} atacou usando ${ataque}.`);
  }
}

const heroi1 = new Heroi("Gabriel", 22, "guerreiro");
const heroi2 = new Heroi("Roberto", 99, "mago");
const heroi3 = new Heroi("Claudio", 394, "monge");
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();