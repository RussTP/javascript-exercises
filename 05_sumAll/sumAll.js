const sumAll = function(min, max) {
//confirms if max/ min number is not integer (!) if true return error
if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
// if min/max less than 0 return error
if (min < 0 || max < 0 )  return "ERROR";
// if min is greater than max min will now be max and vice versa
if 
(min > max) { 
   const tempNum = min;
   min = max;
   max = tempNum;
}
//default sum 0 (empty)
let sum = 0;
//creates loop variable i for min, if i <= max loop continues until less than or equal to, if i exceeds loop stops
//sum += adds current value of i to sum git 
for (let i = min; i <= max; i++) {
    sum += i;
}

return sum;

};


sumAll(4, 1);

// Do not edit below this line
module.exports = sumAll;
