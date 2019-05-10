// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
var array = [4, 2, 2, -1, 6];

function minimum(array) {
    var min = array[0];
    var index;
    var result = "";
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            index = i;
        }

    }
    result = min + "[" + index + "]";
    return result;
}
console.log(minimum(array));