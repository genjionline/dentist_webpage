// 18

// alert(`Please enter your data`);
// let username = prompt('Enter your name', `Name`);
// let surname = prompt('Enter your surname', `Surname`);
// let age = prompt('How old are you?', `Age`);
// let access = confirm('Are you admin?');
// alert(`Your full name is: ${username} ${surname}, your age is: ${age}, access status is: ${access}`);

// 19

// let first = prompt('Enter your first salary');
// let second = prompt('Enter your second salary');
// alert(`Your salary for 2 months is: ${+first + +second}$`);
// alert(`You have extra bonus! Your total salary was: ${+first + +second}$ It's increase for 1$ and now it is: ${+first + +second +1}$ `);
// alert(`Will you work next? ${+first + +second +1 >= 2000}`);
// let sum = +first + +second + 1;
// if (sum < 2000) {
//     alert("I'm out");
// } else if (sum >= 2000) {
//     alert("I'm ready to work");
// }

// 20

// let age = prompt('How old are you?');
// if (age <= 17) {
//     confirm('Do you study at school?');
// }else if (age > 17 && age < 25) {
//     confirm('Do you study at university?');
// }else if (age >= 25 && age < 60) {
//     confirm('Do you have a job?');
// }else {
//     prompt('What are you doing?');
// }

// let display = prompt('Set display:');
// switch(display) {
//     case 'block':
//         alert("Set 'display: block;'");
//         break;
//     case 'flex':
//         alert("Set 'display: flex;'");
//         break;
//     case 'grid':
//         alert("Set 'display: grid;'");
//         break;
//     case 'inline':
//         alert("Set 'display: inline;'");
//         break;
//     case 'none':
//         alert("Set 'display: none;'");
//         break;    
//     default: alert("Set 'display: inline-block;'")
// }

// let number = prompt('Please enter the number');
//  if (isNaN(number) || number < 1) {
//     prompt('Your number is incorrect. Please enter correct number');
// } else if (number >= 1) {
//     alert(`${number} by 12 equals ${number * 12}`);
// }

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
