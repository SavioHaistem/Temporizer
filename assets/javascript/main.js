class timer {
    constructor(Time) {
        this.timer = { Time };
        this.time = document.querySelector('.time')
    }
    visor() {
        this.time.innerHTML = `${this.timer.Time}`
    }
    plustime() {
        this.timer.Time >= 0 ? this.timer.Time += 1 : undefined
        this.visor()
    }
    minustime() {
        this.timer.Time > 0 ? this.timer.Time -= 1 : undefined
        this.visor()
    }
    play() {
        this.timer.Time = ()=>{}
        this.visor()
    }
}

const TIMER = new timer(0)