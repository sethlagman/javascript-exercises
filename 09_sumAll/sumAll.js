const sumAll = function(a, b) {
    if (
        typeof a != "number" ||
        typeof b != "number" ||
        a < 0 ||
        b < 0 || 
        a % 1 != 0 ||
        b % 1 != 0
    ) {
        return 'ERROR'
    }
    
    let sum = 0;
    
    const starting = (a < b) ? a : b
    const ending = (b > a) ? b : a

    for (let i = starting; i <= ending; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
