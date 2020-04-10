const _ = require('lodash')

class StringCalculator {
   add(str) {
        const isCustoDelimiter = str.slice(0,2) === '//'
        const firstLine = str.split('\n')[0]
        const delimiter = isCustoDelimiter ? firstLine.slice(2) : ','

        return this._add(str, delimiter)
   } 

   _add(str, delimiter) {
        const numbers = _.replace(str, /\n/g, delimiter)
            .split(delimiter)
            .filter(x => x < 1000)

        const negativeNumbers = numbers.filter(x => x < 0)

        if (negativeNumbers.length > 0)
            throw new Error(`negatives not allowed: ${negativeNumbers.join(',')}`)

        return numbers.reduce((acc, val) => acc + +val, 0)
        
   }
}

module.exports = StringCalculator