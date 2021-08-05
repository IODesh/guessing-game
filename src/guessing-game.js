class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.number = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.number = Math.ceil(( this.min + this.max) / 2);
        return this.number;
    }

    lower() {
        this.max = this.number;
        return this.max
    }

    greater() {
        this.min = this.number;
        return this.min
    }
}

module.exports = GuessingGame;

