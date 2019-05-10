// Write a function that takes a number and returns array of its digits.
// 976 / 10 = 97.6
// 97.6 --> parseInt 97; USLOV (da li je broj(97) jednA cifrA) -?TRUE --> TAJ BROJ UBACI U NOVI NIZ?, 
// ?FALSE broj(97) / 10?; 9.7--> parseInt; 9 USLOV(da li je broj(9) jednA cifrA) -> True -> ubaci u niz.
// 97%10 9.7 parseInt
//USLOV(da li je number[i] !< 10 ) 
//TRUE
//FALSE UBACI U NIZ
var number = 976;

function returnArray(number) {
    var newArray = [];
    var num = 0;
    var i = 0;

    for (i = 0; (number % 10) > 0; i++) {
        newArray[i] = number % 10;
        number = parseInt(number / 10);

        // if (num < 10) {
        //     newArray[i] = num;
        //     break;
        // }


    }
    return newArray;
}
var res = returnArray(number);












// function returnArray(params) {
//     var num = number + "";
//     var newArray = [];
//     for (i = 0; i < num.length; i++) {
//         newArray[i] = num[i] * 1;
//     }
//     return newArray;
// }

// console.log(returnArray(number));

