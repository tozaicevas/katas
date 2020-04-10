const Greeter = require('./Greeter')

let greeter
let log

beforeEach(() => {
    log = jest.fn(console.log)
    greeter = new Greeter(new Date("1995-12-17T13:00:00"), log)
})

test('greet() should return Hello Tomas', () => {
    expect(greeter.greet('Tomas')).toBe('Hello Tomas')
})

test('greet() should trim whitespaces', () => {
    expect(greeter.greet('   Tomas   \n\t   ')).toBe('Hello Tomas')
})

test('greet() should capitalize first letter', () => {
    expect(greeter.greet('jonas')).toBe('Hello Jonas')
})

test('greet() should return good morning when the time is 06:00-12:00', () => {
    greeter = new Greeter(new Date("1995-12-17T06:00:00"))
    expect(greeter.greet("Jonas")).toBe('Good morning Jonas')
})

test('greet() should return good evening when the time is 18:00-22:00', () => {
    greeter = new Greeter(new Date("1995-12-17T18:00:00"))
    expect(greeter.greet("Jonas")).toBe('Good evening Jonas')
})

test('greet() should return good night when the time is 22:00-06:00', () => {
    greeter = new Greeter(new Date("1995-12-17T22:00:00"))
    expect(greeter.greet("Jonas")).toBe('Good night Jonas')
})

test('greet() should log into console each time it is called', () => {
    greeter.greet('')
    expect(log).toBeCalledTimes(1)
})