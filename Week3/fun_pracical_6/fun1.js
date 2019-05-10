// Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

var array = [5, -4.2, 3, 7];
var element = 3;

var fun = function (array, element) {

    var result = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            result = "Yes";
            break;
        } else {
            result = "No"
        }

    }
    return result;
}

console.log(fun(array, element));

