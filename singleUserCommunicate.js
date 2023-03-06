// alert('Hello'); // browser integrated modal window
// console.log('Hello world');
//
// const result = confirm("Are you here?"); // question with 2 options
// console.log(result); // save confirm true or false in variable result
//
// const answer = prompt("Have you already 18 years old?", "18"); // prompt with input data
// console.log(typeof(answer)); // always be string
//
const answers = [];

answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your last name?', '');
answers[2] = prompt('How old are you?', '');

document.write(answers);
