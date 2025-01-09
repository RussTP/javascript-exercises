const leapYears = function(year)
 { const century = year % 100 === 0;
if (year % 4 === 0 && (!century || year % 400 === 0)) {
return year = true; 
} else {
return year = false; 
}
};
console.log(leapYears(1984))
// Do not edit below this line
module.exports = leapYears;
