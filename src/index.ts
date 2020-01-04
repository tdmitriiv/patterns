class Observable {
    private observers: Array<Observer>
    private changed: boolean = false

    constructor () {
        this.observers = []
    }

    addObserver (o: Observer): void {
        this.observers.push(o)
    }

    deleteObserver (o: Observer): void {
        const observableIndex = this.observers.findIndex((observable: Observer) => observable === o)
        if (observableIndex >= 0) {
            this.observers.splice(observableIndex, 1)
        }
    }

    notifyObservers (data: Object | null = null): void {
        if (this.changed) {
            this.observers.forEach((o: Observer) => {
                o.update(this, data)
            })
            this.changed = false
        }
    }

    setChanged (): void {
        this.changed = true
    }
}

interface Observer {
    update (o: Observable, data: Object | null): void
}

interface DisplayElement {
    display (): void
}

class WeatherData extends Observable {
    private temperature: number
    private humidity: number
    private pressure: number

    private dataChanged (): void {
        this.setChanged()
        this.notifyObservers()
    }

    setData (temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.dataChanged()
    }

    public getTemperature (): number {
        return this.temperature
    }
    public getHumidity (): number {
        return this.humidity
    }
    public getPressure ():number {
        return this.pressure
    }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
    temperature: number
    humidity: number
    observable: Observable

    constructor(observable: Observable) {
        this.observable = observable
        this.observable.addObserver(this)
    }

    update(observable: Observable, data: Object | null): void {
        if (observable instanceof WeatherData) {
            const weatherData = observable
            this.temperature = weatherData.getTemperature()
            this.humidity = weatherData.getHumidity()
            this.display()
        }
    }
    display(): void {
        console.log('ConditionsDisplay version 2', this.temperature, this.humidity)
    }
}

const weatherData = new WeatherData()
const conditionsDisplay = new CurrentConditionsDisplay(weatherData)
weatherData.setData(30, 20, 140)
weatherData.setData(35, 33, 130)