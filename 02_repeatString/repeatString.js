const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let rString = "";

    for (let i = 0; i < num; i++) {
        rString += string;
    }
    
    return rString;
};

// Do not edit below this line
module.exports = repeatString;
