// Write a function that increases each element of the given array by the given value.
// If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

const arr = [4, 6, 11, -9, 2.1];
const someValue = 2;

const addingValue = (...arr) => {
    let sum = [];

    (arr.length <= 1) ? sum = arr[0].map(elem => elem + 1) : sum = arr[0].map(elem => elem + arr[1]);

    return sum
}

console.log(addingValue(arr, someValue));