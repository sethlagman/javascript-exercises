const palindromes = function (str) {
    let filtering = [' ', ',', '.', '!', '?']
    let splitted = str.split('')
    .map(element => element.toLowerCase())
    .filter(element => {
        if (!filtering.includes(element)) return element
    })
    let splittedJoin = splitted.join('')

    for (let i = splitted.length; i >= 0; i--) {
        let origIndex = splitted.length - i
        if (splitted[i - 1] !== splittedJoin[origIndex]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
