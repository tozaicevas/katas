class BowlingGame {

    constructor() {
        this.rolls = []
        this.strikeCount = 0
        this.rollIndex = 0
    }

    roll(pins) {
        const { rollIndex } = this
        const rolls = [...this.rolls, pins]

        const isSpare = (rolls[rollIndex - 1] + rolls[rollIndex - 2]) === 10
        const isStrike = rolls[rollIndex - 1] >= 10 || rolls[rollIndex - 2] >= 10

        if (isStrike) {
            rolls[rollIndex - 1] += rolls[rollIndex - 1] >= 10 ? pins : 0
            rolls[rollIndex - 2] += rolls[rollIndex - 2] >= 10 ? pins : 0
        } else if (isSpare)
            rolls[rollIndex - 1] += pins

        this.rolls = rolls
        this.rollIndex++
    }

    score() {
        return this.rolls.reduce((acc, val) => acc + val, 0)
    }

}

module.exports = BowlingGame