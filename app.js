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

// for (let i = 2; i <= 50; i += 2) {
//     console.log(i);
// }

// 21

// let a = prompt('Type "a" number');
// let b = prompt('Type "b" number');
// function maxNumber (a, b) {
//     if (+a > +b) {
//         return a;
//     } else if (+b > +a) {
//         return b;
//     } else if (+a === +b) {
//         return ('a = b');
//     }
// }
// alert (maxNumber(a,b));

// let number = prompt('Enter the number');
// function reverse(number) {
//     if (+number >= 0) {
//         return -number;
//     } else {
//         return -number;
//     }
// }
// alert(reverse(number));

// let number = prompt ('Enter number');
// let count = prompt('Enter count');
// function three(number,count) {
//     return number + 3 * count;
// }
// alert (three(+number, +count));


// function KmToM(km) {
//     return km * 1000;
// }
// function KmToCm(km) {
//     return km * 100000;
// }
// function getMetric(metric, km, m, cm) {
//     if (metric === "m") {
//         return m(km);
//     } else if (metric === "cm") {
//         return cm(km);
//     }
// }
// let km = prompt ('Enter km distance');
// let metric = prompt('Enter m or cm');
// alert (getMetric(metric, km, KmToM, KmToCm));

// 22

// let car = {
//     model: "chevrolet",
//     year: 1967,
//     color: "black",
//     signal: function (){
//         alert('fa! fa!');
//     },
// }
// car.type = "electric";
// console.log(car);
// car.signal ();

// let salaries = {
//     frontend: 12000,
//     backend: 10000,
//     designer: 8000,
//     dayPay() {
//         alert('We must pay salary on Tuesday!');
//     },
//     total() {
//         let sum = 0;
//         for (let key in this) {
//             if (typeof this[key] === 'number') {
//                 sum += this[key];
//             }
//         }
//         console.log(sum);
//     }
// };
// salaries.total();
// salaries.manager = 5000;
// salaries.total();

function Laptop (brand, system, cost) {
    this.brand = brand;
    this.system = system;
    this.cost = cost;
    this[Symbol.toPrimitive] = function (hint){
        console.log(hint); // 2*default, string, 2*number, number, number, string
        switch(hint){
            case 'string':
                return this.brand
            case 'number':
                return this.cost
            case 'default':
                return this.brand + ' ' + this.system + ' ' + this.cost + '//'
        }
    }

}
let dell = new Laptop ('Dell', 'windows', '800');
let apple = new Laptop ('Apple', 'MAC OS', '1700');
console.log(dell);
console.log(apple);
console.log(String(dell));
console.log(+apple);
console.log(dell + apple);
