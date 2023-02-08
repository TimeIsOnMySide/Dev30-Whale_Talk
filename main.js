// Step 1
// Create a variable named input that is equal to any phrase you’d like. 
// This variable will contain the text you want to translate into “whale talk”.

let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];


for (let i = 0; i < input.length; i++) {
    let inputLetter = input[i];
    if(inputLetter === 'e' || inputLetter === 'u') {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
          if(inputLetter === vowels[j]) {
            resultArray.push(vowels[j]);
          }
    }
}

let resultString = resultArray.join('').toUpperCase();

console.log(resultString);

