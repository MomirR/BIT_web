//TRECA VEZBA
// var day = 1;
// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("It is a weekday");
//         break;
//     case 6:
//     case 7:
//         console.log("It is a weekend");
//         break;
//     default:
//         console.log("Input must be number between 1 and 7");
//         break;
// }
//CETVRTA VEZBA
// var month = 11;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Input must be a number between 1 and 12");
//         break;
// }
// PETA VEZBA
// var month = 1;
// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("It is winter!");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("It is spring!");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("It is summer!");
//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("It is autumn!");
//         break;
//     default:
//         console.log("Input must be a number between 1 and 12");
//}
// SESTI ZADATAK
// var grade = "A";
// switch (grade) {
//     case "A":
//         console.log("Good job");
//         break;
//     case "B":
//         console.log("Pretty good");
//         break;
//     case "C":
//         console.log("Passed");
//         break;
//     case "D":
//         console.log("Not so good");
//         break;
//     default:
//         console.log("Unknown grade");
//         break;
// }
// EXTRA 1.
// var city = "Madrid";
// switch (city) {
//     case "Beograd":
//     case "Novi Sad":
//     case "Valjevo":
//         console.log("Srbija");

//         break;
//     case "Barselona":
//     case "Madrid":
//     case "Valensija":
//         console.log("Spanija");
//         break;
//     case "Moskva":
//     case "St. Petersburg":
//     case "Volgograd":
//         console.log("Rusija");
//         break;
//     case "Rim":
//     case "Firenca":
//     case "Bolonja":
//         console.log("Italija");
//         break;
//     case "Skoplje":
//     case "Berovo":
//     case "Ohrid":
//         console.log("Makedonija");
//         break;
//     default:
//         console.log("Please choose a different city");
//         break;
// }
//EXTRA 2.
var num1 = 3;
var num2 = 0;
var operator = "/";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        switch (num1 && num2) {
            case 0:
                console.log("Doslo je do greske");
                break;
            default:
                console.log(num1 / num2);
                break;
        }
        break;
}




