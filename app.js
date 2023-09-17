alert(`Please enter your data`);
let username = prompt('Enter your name', `Name`);
let surname = prompt('Enter your surname', `Surname`);
let age = prompt('How old are you?', `Age`);
let access = confirm('Are you admin?');
alert(`Your full name is: ${username} ${surname}, your age is: ${age}, access status is: ${access}`);
