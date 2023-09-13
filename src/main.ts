

class Telur {
  id: number;
  jenis: string;
  elements: string;
}

class Naga extends Telur {
  nama: string;
  level: number;
  isMenetas: boolean;
  score: number;
  damage: number;

  constructor(nama: string, damage: number) {
    super();
    this.nama = nama;
    this.level = 1;
    this.isMenetas = false;
    this.score = 100;
    this.damage = damage
  }

  attack(naga: Naga) {
    naga.score = naga.score - this.damage;
  }
}

class Player {
  id: number;
  name: string;
  level: number;
  nagaCollection: Array<Naga> = []; 
  nagaChoice: Naga;

  constructor(id: number, name: string, naga: Naga) {
    this.id = id;
    this.name = name;
    this.nagaCollection.push(naga);
    this.level = 1;
   
  }

  setNagaToAttack(naga: Naga) {
    this.nagaChoice = naga;
  }

  war(player: Player) {
    console.log(`${player.name} is under attack from ${this.name}`)
    this.nagaChoice.attack(player.nagaChoice);
  }
}

class Colosium {
  name: string;
  players: Array<Player>;
  enemy: Player;
  player: Player;

  constructor(name: string, player1: Player, player2: Player) {
    this.name = name;
    this.players = [player1, player2];
  }

  start() {
    let myInterval = setInterval(() => {
      let indexRandom = Math.floor(Math.random() * this.players.length)
      console.log(indexRandom)
      this.player = this.players[indexRandom]
      
      if (indexRandom === 0) {
        this.enemy = this.players[1];
      } else {
        this.enemy = this.players[0];
      }

      if (this.enemy) {
        this.player.war(this.enemy);
        this.showScore()
      }

      if (this.enemy.nagaChoice.score <= 0) {
        clearInterval(myInterval);

        console.log(`${this.player.name} is WIN!!!!`)
      }
    }, 1500)
  }

  showScore() {
    console.log("Player: ", this.player.nagaChoice.score)
    console.log("Enemy: ", this.enemy.nagaChoice.score)
  }
}

let naga1 = new Naga("Oncom", 30);
let naga2 = new Naga("Tempe", 40);

let player1 = new Player(1, "Budi", naga1);
let player2 = new Player(2, "Sintia", naga2);

player1.setNagaToAttack(naga1);
player2.setNagaToAttack(naga2);

let italy = new Colosium("Italy", player1, player2)
italy.start();

