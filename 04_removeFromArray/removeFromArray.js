//Rest parameter (...args) accepts indefinite number of arguments  as an array ...Full stop characters 
//allows user supplied parameters to be placed within the array object
const removeFromArray = function(myArray, ...args) {
//array for args to be stored
const newArray = [];
//forEach cycles through each item in the array (loop)
myArray.forEach((item) => {
// if condition is true, if item is not in args (! negates)
if (!args.includes(item)) {
// if the !args is true item is added to the newArray
    newArray.push(item);
}
});
return newArray;
};
console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7], 5))



// Do not edit below this line
module.exports = removeFromArray;
