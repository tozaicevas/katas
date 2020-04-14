const BowlingGame = require('./BowlingGame')
const _ = require('lodash')

let bowlingGame

// 1. All rolls are 0, should give score 0
// 2. All rolls are 1, should give score 20
// 3. Rolled [5, 5, 3] should give score 16 (spare)
// 4. Rolled [10, 3, 4] should give score 10 + 3*2 + 4*2 = 24 (strike)

const repeatRoll = (n, pins) => _.times(n, () => bowlingGame.roll(pins))

beforeEach(() => {
    bowlingGame = new BowlingGame
})

test('class loads', () => {
    new BowlingGame()
})

test('1. all rolls are 0, should give score 0', () => {
    repeatRoll(20, 0)

    expect(bowlingGame.score()).toStrictEqual(0)
})

test('2. all rolls are 1, should give score 20', () => {
    repeatRoll(20, 1)

    expect(bowlingGame.score()).toStrictEqual(20)
})

test('3. spare', () => {
     repeatRoll(2, 5)
     bowlingGame.roll(3)
     repeatRoll(17, 0)
     
     expect(bowlingGame.score()).toStrictEqual(16)
})

test('4. strike', () => {
    bowlingGame.roll(10)
    bowlingGame.roll(3)
    bowlingGame.roll(4)
    repeatRoll(16, 0)

    expect(bowlingGame.score()).toStrictEqual(24)
})

test('4. strike', () => {
    bowlingGame.roll(0)
    bowlingGame.roll(10)
    bowlingGame.roll(2)
    repeatRoll(16, 0)

    expect(bowlingGame.score()).toStrictEqual(14)
})
