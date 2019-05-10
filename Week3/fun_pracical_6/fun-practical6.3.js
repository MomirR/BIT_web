// Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

var letters = ["a", "b", "c", "d"];
var numbers = [1, 2, 3];

function combine(letters, numbers) {
    var lettersLength = letters.length;
    var numberLength = numbers.length;
    var newArray = [];
    for (i = 0; i < lettersLength; i++) {
        newArray[i * 2] = letters[i];
    }
    for (j = 0; j < numberLength; j++) {
        newArray[j * 2 + 1] = numbers[j];
    }


    return newArray;
}

var res = combine(letters, numbers);
console.log(res);
