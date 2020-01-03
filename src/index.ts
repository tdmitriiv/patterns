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

const mallard = new MallardDuck()
mallard.display()
mallard.performFly()
mallard.performQuack()

