// Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var array = [4, 2, 2, -1, 6];

function printSecondMin(array) {
    var min = array[0];
    var secondSmall = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];

        }

        // for (i = 0; i < array.length; i++) {
        //     if (array[i] > min && array[i] < secondSmall) {
        //         secondSmall = array[i];
        //     }
        // }


    }

    for (j = 0; j < array.length; j++) {

        if (array[j] > min && array[j] < secondSmall) {
            secondSmall = array[j];
        }
    }
    return secondSmall;
}
console.log(printSecondMin(array));