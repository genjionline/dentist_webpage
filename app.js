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

// function Laptop (brand, system, cost) {
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
//     this[Symbol.toPrimitive] = function (hint){
//         console.log(hint); // 2*default, string, 2*number, number, number, string
//         switch(hint){
//             case 'string':
//                 return this.brand
//             case 'number':
//                 return this.cost
//             case 'default':
//                 return this.brand + ' ' + this.system + ' ' + this.cost + '//'
//         }
//     }

// }
// let dell = new Laptop ('Dell', 'windows', '800');
// let apple = new Laptop ('Apple', 'MAC OS', '1700');
// console.log(dell);
// console.log(apple);
// console.log(String(dell));
// console.log(+apple);
// console.log(dell + apple);

// 23

// let users = ['Mike', 'Nikola', 'Tom']
// console.log(users[2]);

// let a = [5, 3, -4, 25, 32, -16, 6];
// let b = [21, -30, 9, 5, 12, -19, 5, 25];
// function compare (a, b) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             return 'a > b';
//         } else if (a[i] < b[i]) {
//             return 'a < b';
//         } else return 'a = b';
//     }
// }
// console.log(compare(a, b));

// let phrase = 'I am learning Javascript right now';
// let arr = phrase.split(' ');
// console.log(arr);

// let a = [5, 3, 8, 5, 3, 2, 1, 2];
// let b = [];
// a.forEach(function(element) {
//     if (!b.includes(element)) {
//         b.push(element);
//     }
// });
// console.log(b);

// let users = [{id: 1, age: 17},
//             {id: 2, age: 18},
//             {id: 3, age: 19},
//             {id: 4, age: 21},
//             {id: 5, age: 17},
//             {id: 6, age: 20},
//             {id: 7, age: 25},
// ];
// function selectionAge(users) {
//     let filteredUsers = users.filter(function(user) {
//         return user.age > 18 && user.age < 21;
//     });
//     let ids = filteredUsers.map(function(user) {
//         return user.id;
//     });
//     console.log(ids.join(', '));
// }
// selectionAge(users);

// 24

// 24.1.1)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function count(arr, index) {
//     if (index < arr.length - 1) {
//         return arr[index] + count(arr, index + 1);
//     } else {
//         return arr[index];
//     }
// }
// let result = count(arr, 0);
// console.log(result);

// 24.1.2)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function count(arr, index) {
//     return index < arr.length - 1 ? arr[index] + count(arr, index + 1) : arr[index];
// }
// let result = count(arr, 0);
// console.log(result);

// 24.2.1)
// function deepCount(arr) {
//     let count = 0;   
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             count += deepCount(arr[i]);
//         }
//     }  
//     return count;
// }
// console.log(deepCount([]));
// console.log(deepCount([1, 2, 3]));
// console.log(deepCount(["x", "y", ["z"]]));
// console.log(deepCount([1, 2, [3, 4, [5]]]));
// console.log(deepCount([[[[]]]]));

// 24.2.2)
// function deepCount(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         count += Array.isArray(arr[i]) ? deepCount(arr[i]) : 1;
//     }
//     return count;
// }
// console.log(deepCount([]));
// console.log(deepCount([1, 2, 3]));
// console.log(deepCount(["x", "y", ["z"]]));
// console.log(deepCount([1, 2, [3, 4, [5]]]));
// console.log(deepCount([[[[]]]]));

// 24.3
// let employees = {
//     development: {
//     backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
//     frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
//     },
//     sales: {
//     marketing: {
//     internet_marketers: [{name: 'Nina', salary: 1000}, {name:'Olena', salary: 1300}],
//     promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
//     },
//     sellers: [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700},
//     {name:'Joe', salary: 1100}],
//     },
//     designer: [{name: 'Kate', salary: 1800}]
// }
// function AnotherSumSalary() {
// let sum = 0;
// function sumSalary(obj){
//     for(let key in obj){
//         if (Array.isArray(obj[key])) {
//             obj[key].forEach(employee => sum += employee.salary);
//         } else {  
//             sumSalary(obj[key]);
//         }
//     }
// }
// return function() {
//     sumSalary(employees);
//     return sum;
// };
// }
// const calculateSumSalary = AnotherSumSalary();
// console.log(calculateSumSalary());

// 24.4

// let arr1 = [2, 15, 7, 3];
// let arr2 = [9, 3, 17, 12, 4, 8];
// let arr3 = [6, 11, 16, 15, 11];
// let maxInArrays = Math.max(...arr1, ...arr2, ...arr3);
// console.log(maxInArrays);