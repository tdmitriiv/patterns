interface Subject {
    registerObserver(o: Observer): void,
    removeObserver(o: Observer): void,
    notifyObservers(): void
}

interface Observer {
    update(temp: number, humidity: number, pressure: number): void
}

interface DisplayElement {
    display (): void
}

class WeatherData implements Subject {
    private observers: Array<Observer>
    private temperature: number
    private humidity: number
    private pressure: number

    constructor () {
        this.observers = []
    }

    registerObserver (o: Observer): void {
        this.observers.push(o)
    }
    removeObserver (o: Observer): void {
        const observableIndex = this.observers.findIndex((observable: Observer) => observable === o)
        if (observableIndex >= 0) {
            this.observers.splice(observableIndex, 1)
        }
    }
    notifyObservers (): void {
        this.observers.forEach((o: Observer) => {
            o.update(this.temperature, this.humidity, this.pressure)
        })
    }

    private dataChanged (): void {
        this.notifyObservers()
    }

    setData (temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.dataChanged()
    }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
    temperature: number
    humidity: number
    weatherData: Subject

    constructor(weatherData: Subject) {
        this.weatherData = weatherData
        weatherData.registerObserver(this)
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp
        this.humidity = humidity
        this.display()
    }
    display(): void {
        console.log('ConditionsDisplay', this.temperature, this.humidity)
    }
}

const weatherData = new WeatherData()
const conditionsDisplay = new CurrentConditionsDisplay(weatherData)
weatherData.setData(30, 20, 140)
weatherData.setData(35, 33, 130)