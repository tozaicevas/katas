class Greeter {

    constructor(date = new Date(), log = console.log) {
        this.date = date
        this.log = log
    }

    greet(name) {
        this.log('greet() has been called')

        const trimmedName = name.trim()
        const capitalizedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1)

        if (this.date.getHours() >= 6 && this.date.getHours() < 12)
            return `Good morning ${capitalizedName}` 

        if (this.date.getHours() >= 18 && this.date.getHours() < 22)
            return `Good evening ${capitalizedName}` 

        if (this.date.getHours() >= 22 || this.date.getHours() < 6)
            return `Good night ${capitalizedName}` 

        return `Hello ${capitalizedName}`
    }
}

module.exports = Greeter