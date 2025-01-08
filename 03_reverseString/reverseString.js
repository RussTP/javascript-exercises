const reverseString = function(word) {
return word.split("").reverse().join("");
};

reverseString("Hello There");

// Split turns the string into an Array which can be reveresed, .join will "re-string" in reverse

// Do not edit below this line
module.exports = reverseString;
