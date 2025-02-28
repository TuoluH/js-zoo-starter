let animalPop = 0;

function run() {
  var tigger = new Tiger("Tigger");
  var pooh = new Bear("Pooh");
  var rarity = new Unicorn("Rarity");
  var gemma = new Giraffe("Gemma");
  var stinger = new Bee("Stinger");

  var zoebot = new Zookeeper("ZoeBot");
  zoebot.feedAnimals([tigger, pooh, stinger], "pizza");
}



class Animal {

  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
    animalPop++;
  }

  sleep() {
    console.log(this.name + " sleeps for 8 hours");
  }

  eat(food) {
    console.log(this.name + " eats " + food);
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more " + food);
    } else {
      this.sleep(this.name);
    }
  }

  static getPop() {
    return animalPop;
  }
}


class Tiger extends Animal {

  constructor(name) {
    super(name, "meat");
  }
}

class Bear extends Animal {

  constructor(name) {
    super(name, "fish");
  }

  sleep() {
    console.log(this.name + " hibernates for 4 months");
  }
}

class Unicorn extends Animal {

  constructor(name) {
    super(name, "marshmallows");
  }

  sleep() {
    console.log(this.name + " sleeps in a cloud");
  }
}

class Giraffe extends Animal {
  constructor(name) {
    super(name, "leaves");
  }

  eat(food) {
    if (food != this.favoriteFood) {
      console.log("YUCK!!! " + this.name + " will not eat " + food);
    } else {
      super.eat(food);
      this.sleep(this.name);
    }
  }
}

class Bee extends Animal {
  constructor(name) {
    super(name, "pollen");
  }

  sleep() {
    console.log(this.name + " never sleeps");
  }

  eat(food) {
    if (food != this.favoriteFood) {
      console.log("YUCK!!! " + this.name + " will not eat " + food);
    } else {
      super.eat(food);
      this.sleep(this.name);
    }
  }
}

class Zookeeper {
  constructor(name) {
    this.name = name;
  }

  feedAnimals(animals, food) {
    console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPop() + " animals");
    for (let i = 0; i < animals.length; i++) {
      animals[i].eat(food);
    }
  }
}

// //starter code
// var favoriteFood = 'bacon';

// function sleep(name) {
//   console.log(name + " sleeps for 8 hours")
// }

// function eat(name, food) {
//   console.log(name + " eats " + food);
//   if (food == favoriteFood) {
//     console.log("YUM!!! " + name + " wants more " + food);
//   } else {
//     sleep(name);
//   }
// }