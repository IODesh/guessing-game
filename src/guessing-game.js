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
        this.number = Math.round((min + max) / 2);
    }

    lower() {
        this.max = this.number;
    }

    greater() {
        this.max = this.number;
    }
}

module.exports = GuessingGame;

