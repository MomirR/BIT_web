// Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120
// 	Output: 24

const price = 120;

const rez = function rez(price) {
    return (price / 100) * 20;
}

console.log(rez(price));
