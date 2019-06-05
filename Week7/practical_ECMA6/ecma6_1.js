// Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: 'hello', 'there', 'ES', 6
// 	Output: 'Hello', 'There', 'ES'

function capEachtLetter(...args) {
    const newString = args.filter(function (elem) {
        return (typeof elem) === 'string'
    });

    const firstLetterToUp = newString.map(function (newArr) {
        return newArr[0].toUpperCase() + newArr.slice(1).toLowerCase();

    })

    console.log(firstLetterToUp);

}
capEachtLetter('hello', 'there', 'ES', 6);


