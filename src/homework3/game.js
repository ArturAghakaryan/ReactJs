class Warior {
  constructor(minPower, maxPower, health, name = "gamer") {
    this.name = name;
    this.minPower = minPower;
    this.maxPower = maxPower;
    this.health = health;
  }

  attack = () => {
    return Math.floor(
      Math.random() * (this.maxPower - this.minPower) + this.minPower
    );
  };
}

const gamerOne = new Warior(80, 130, 1000, "Test");
const gamerTwo = new Warior(80, 130, 1000, "Animal");

function play() {
  while (gamerOne.health > 0 && gamerTwo.health > 0) {
    let attackOne = gamerOne.attack();
    let attackTwo = gamerOne.attack();

    if (attackOne > gamerTwo.health && attackOne > attackTwo) {
      attackOne = gamerTwo.health;
      attackTwo = 0;
      gamerTwo.health = gamerTwo.health - attackOne;
    } else if (attackTwo > gamerOne.health  && attackTwo > attackOne) {
      attackTwo = gamerOne.health;
      attackOne = 0;
      gamerOne.health = gamerOne.health - attackTwo;
    } else {
      gamerOne.health = gamerOne.health - attackTwo;
      gamerTwo.health = gamerTwo.health - attackOne;
    }

    console.table(
      {
        [gamerOne.name]: {
          "health": gamerOne.health,
          "attack power": attackOne,
        },
        [gamerTwo.name]: {
          "health": gamerTwo.health ,
          "attack power": attackTwo,
        },
      },
      ["health", "attack power"]
    );
  }

  if (gamerOne.health < gamerTwo.health) {
    console.log("/--------- Win " + gamerTwo.name + " ---------/");
  }

  if (gamerTwo.health < gamerOne.health) {
    console.log("/--------- Win " + gamerOne.name + " ---------/");
  }
}

play();
