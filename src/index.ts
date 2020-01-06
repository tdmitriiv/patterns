abstract class Beverage {
    description: string = 'Unknown Beverage'

    public getDescription ():string {
        return this.description
    }
    public abstract cost (): number
}

abstract class CondimentDecorator extends Beverage {
    public abstract getDescription(): string // переопределенный метод в декораторах
}

class Espresso extends Beverage {
    constructor () {
        super()
        this.description = 'Espresso'
    }

    cost(): number {
        return 1.99;
    }
}

class HouseBlend extends Beverage {
    constructor() {
        super()
        this.description = 'House Blend Coffee'
    }

    cost(): number {
        return 0.89;
    }
}

class Mocha extends CondimentDecorator {
    beverage: Beverage

    constructor(bevarage: Beverage) {
        super()
        this.beverage = bevarage
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Mocha';
    }

    cost() {
        return this.beverage.cost() + 0.2
    }
}

class Soy extends CondimentDecorator {
    beverage: Beverage

    constructor (beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Soy'
    }

    cost ():number {
        return this.beverage.cost() + 0.15
    }
}

class Whip extends CondimentDecorator {
    beverage: Beverage

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    getDescription (): string {
        return this.beverage.getDescription() + ', Whip'
    }

    cost ():number {
        return this.beverage.cost() + 0.10
    }
}

// эспрессо без дополнений
const beverage:Beverage = new Espresso()
console.log(`${beverage.getDescription()} ${beverage.cost()}$`)

// Домашняя смесь с сбитыми сливками, соей и шоколадом
let beverage3:Beverage = new HouseBlend()
beverage3 = new Soy(beverage3)
beverage3 = new Mocha(beverage3)
beverage3 = new Whip(beverage3)
console.log(`${beverage3.getDescription()} ${beverage3.cost()}$`)