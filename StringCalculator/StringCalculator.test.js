const _ = require('lodash')

const StringCalculator = require('./StringCalculator')

let stringCalculator

beforeEach(() => {
    stringCalculator = new StringCalculator()
})

test('add() should return 0 when given empty string', () => {
    expect(stringCalculator.add('')).toBe(0)
})

test('add() should return one-digit number', () => {
    expect(stringCalculator.add('5')).toBe(5)
})

test('add() should return csv sum', () => {
    expect(stringCalculator.add('5,2,3')).toBe(10)
})

test('add() should return newline sum', () => {
    expect(stringCalculator.add('5\n3')).toBe(8)
})

test('add() should return newline + csv sum', () => {
    expect(stringCalculator.add('1\n2,3\n4')).toBe(10)
})

test('add() should throw exception', () => {
    expect(() => {
        stringCalculator.add('-1,2,-3')
    }).toThrow('negatives not allowed: -1,-3')
})

test('add() should ignore numbers greater than 1000', () => {
    expect(stringCalculator.add('5,10,1250,3')).toBe(18)
})

test('A single char delimiter can be defined on the first line starting with //', () => {
    expect(stringCalculator.add('//#\n1#2')).toBe(3)
})

test('A multi char delimiter can be defined on the first line starting with //', () => {
    expect(stringCalculator.add('//#@!\n1#@!2')).toBe(3)
})