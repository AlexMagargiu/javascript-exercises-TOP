const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val))
};
//Copied from the solution
// Do not edit below this line
module.exports = removeFromArray;
