const fibonacci = function(num) {
    let sequence = [1, 1]
    for (let i = 1; sequence.length <= num; i++) {
        sequence.push(sequence[i - 1] + sequence[i])
    }
    
    return (num == 0) ? 0
    : (num < 0) ? 'OOPS'
    : sequence[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;
