const repeatString = function(string, num) {
    let repeated = ''
    for (let i = 1; i <= num; i++) {
        repeated += string
    }
    return (num < 0) ? 'ERROR' : repeated
};

// Do not edit below this line
module.exports = repeatString;
