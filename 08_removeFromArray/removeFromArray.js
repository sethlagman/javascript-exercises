const removeFromArray = function(array, ...element) {
    for (const ele of element) {
        while (array.includes(ele)) {
            array.splice(array.indexOf(ele), 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
