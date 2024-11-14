const removeFromArray = function(array, ...itemsToRemove) {
    const newArray = [];

    array.forEach((item) => {
        if (!itemsToRemove.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;

    // return array.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
