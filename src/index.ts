interface FlyBehavior {
    fly(): void
}

class FlyWithWings implements FlyBehavior {
    fly():void {
        console.log('im flying')
    }
}

class FlyNoWay implements FlyBehavior {
    fly():void {
        console.log('i cant fly')
    }
}

class FlyRocketPowered implements FlyBehavior {
    fly(): void {
        console.log('im flying with a rocket!')
    }
}

interface QuackBehavior {
    quack(): void
}

class Quack implements QuackBehavior {
    quack(): void {
        console.log('Quack')
    }
}

class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log('<<< Silence >>>')
    }
}

class Squeak implements QuackBehavior {
    quack(): void {
        console.log('Squeak')
    }
}

abstract class Duck {
    flyBehavior: FlyBehavior
    quackBehavior: QuackBehavior

    abstract display(): void

    performFly():void {
        this.flyBehavior.fly()
    }

    performQuack():void {
        this.quackBehavior.quack()
    }

    setFlyBehavior(fb: FlyBehavior):void {
        this.flyBehavior = fb
    }

    setQuackBehavior (qb: QuackBehavior):void {
        this.quackBehavior = qb
    }

    swim():void {
        console.log('All duck float, even decoys')
    }
}

class MallardDuck extends Duck {
    constructor () {
        super()
        this.quackBehavior = new Quack()
        this.flyBehavior = new FlyWithWings()
    }

    display () {
        console.log('im a real Mallard duck')
    }
}

class ModelDuck extends Duck {
    constructor() {
        super()
        this.flyBehavior = new FlyNoWay()
        this.quackBehavior = new Quack()
    }


    display(): void {
        console.log('im a model duck')
    }
}

const mallard = new MallardDuck()
mallard.display()
mallard.performFly()
mallard.performQuack()

const model = new ModelDuck()
model.performFly()
model.setFlyBehavior(new FlyRocketPowered())
model.performFly()

