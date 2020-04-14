const generate = x => {
    if (x === 1)
        return []

    for (let i=2; i<=x; i++) {
        if (x % i === 0)
            return [i, ...generate(x / i)]
    }

}

module.exports = generate