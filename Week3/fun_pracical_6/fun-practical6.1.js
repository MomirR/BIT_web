// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
var string = "Cao Mico kako si danas?";
var vowels = function () {
    var res = 0;
    var length = string.length;

    for (i = 0; i < length; i++) {
        switch (string[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                res += 1;
                break;

            default:
                break;
        }
    }
    return res;
}
console.log(vowels());

