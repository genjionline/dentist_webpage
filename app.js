// 18

// alert(`Please enter your data`);
// let username = prompt('Enter your name', `Name`);
// let surname = prompt('Enter your surname', `Surname`);
// let age = prompt('How old are you?', `Age`);
// let access = confirm('Are you admin?');
// alert(`Your full name is: ${username} ${surname}, your age is: ${age}, access status is: ${access}`);

// 19

let first = prompt('Enter your first salary');
let second = prompt('Enter your second salary');
alert(`Your salary for 2 months is: ${+first + +second}$`);
alert(`You have extra bonus! Your total salary was: ${+first + +second}$ It's increase for 1$ and now it is: ${+first + +second +1}$ `);
alert(`Will you work next? ${+first + +second +1 >= 2000}`);
let sum = +first + +second + 1;
if (sum < 2000) {
    alert("I'm out");
} else if (sum >= 2000) {
    alert("I'm ready to work");
}