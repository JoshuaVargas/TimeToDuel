class Card {
    constructor (name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor (name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        target.resilience -= this.power; 
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        let increment
        super(name, cost);
        this.magnitude = magnitude;
        this.stat = stat;
        magnitude > 0 ? increment = "Raise" : increment = "Lower";
        this.text = `${increment} the target's ${stat} by ${Math.abs(magnitude)}`
    }
    play(target) {
        this.stat === "Resilience" ? target.resilience += this.magnitude : target.power +=this.magnitude;
    }
}

const redBeltNinja = new Unit ("Red Belt Ninja", 3, 3, 4);

const hardAlgorithm = new Effect ("Hard Algorithm", 2, "Resilience", 3);
hardAlgorithm.play(redBeltNinja);

const blackBeltNinja = new Unit ("Black Belt Ninja", 4, 5, 4);

const unhandledPromiseRejection = new Effect ("Unhandled Promise Rejection", 1, "Resilience", -2);
unhandledPromiseRejection.play(redBeltNinja)

const pairProgramming = new Effect ("Pair Programming", 3, "Power", 2);
pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);

console.log(redBeltNinja);
console.log(blackBeltNinja);

