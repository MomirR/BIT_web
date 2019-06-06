// Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: 'hello', 'there', 'ES', 6
// 	Output: 'Hello', 'There', 'ES'

const capEachLetter = (...args) => {
    const newString = args.filter((elem) => (typeof elem) === 'string');

    const firstLetterToUp = newString.map((elem) => {
        if (elem[0] === (elem[0].toLowerCase())) {
            return elem[0].toUpperCase() + elem.slice(1).toLowerCase();
        } else {
            return elem;
        }
    })
    console.log(firstLetterToUp);
}

capEachLetter('hello', 'there', 'ES', 6);
