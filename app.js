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

// 25.1

// class User { 
//     #name;
//     constructor (name,login,age) {
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
//     login;
//     age;
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);

// 25.2

// class User { 
//     #name;
//     constructor (name,login,age) {
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
//     login;
//     age;
//     getName(isAdmin) {
//         return isAdmin ? this.#name : 'Permission denied'
//     }
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// console.log(user1.getName(true));
// console.log(user2.getName(true));
// console.log(user2.getName(false));

// 25.3

// class User { 
//     #name;
//     constructor (name,login,age) {
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
//     login;
//     age;
//     getName(isAdmin) {
//         return isAdmin ? this.#name : 'Permission denied'
//     }
//     ChangeName(newName, password) {
//         if (password === '123') {
//             const oldName = this.#name;
//             this.#name = newName;
//             return `Name changed from ${oldName} to ${newName}`;
//         } else {
//             return 'Permission denied';
//         }
//     }
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// console.log(user1.ChangeName('Bill', '123'));

// 25.4

// class Admin extends User {
//     #isAdmin = true;

//     constructor(name, login, age) {
//         super(name, login, age);
//     }

//     getUserName(user) {
//         return user.getName(this.#isAdmin);
//     }
// }
// let admin = new Admin('AdminUser', 'admin', 30);
// console.log(admin.getUserName(user1));

// 25.5

// class User {
//     #phone;
    
//     constructor(name, phone) {
//         this.name = name;
//         this.#phone = phone;
//     }
    
//     getPhone(isAdmin) {
//         if (isAdmin) {
//             return this.#phone;
//         } else {
//             const parts = this.#phone.split('-');
//             const maskedPhone = `${parts[0]}-******-${parts[parts.length - 1]}`;
//             return maskedPhone;
//         }
//     }
// }
// let user1 = new User('Mike', '067-888-88-99');
// let user2 = new User('Tom', '099-888-88-99');
// console.log(user1.getPhone(false));
// console.log(user2.getPhone(false));
// console.log(user1.getPhone(true));
// console.log(user2.getPhone(true));

// 26.1

// let user = {};
// Object.defineProperty(user, 'name', {
//     value: 'John',
//     writable: false,
//     enumerable: true,
//     configurable: false
// });
// Object.defineProperty(user, 'age', {
//     value: 30,
//     writable: false,
//     enumerable: true,
//     configurable: false
// });
// Object.defineProperty(user, 'id', {
//     value: 12345,
//     writable: false,
//     enumerable: true,
//     configurable: false
// });
// console.log(user.name);
// console.log(user.age);

// user.name = 'Bob';
// user.age = 25;
// console.log(user.name);
// console.log(user.age);

// delete user.id;
// console.log(user.id);

// 26.2

// let dataBase = {
//     dbName: 'user',
//     dbType: 'MySQL'
// }
// let configurateDB = {
//     token: '123',
//     password: '567',
//     user: 'admin'
// }
// Object.freeze(dataBase);
// Object.defineProperty(configurateDB, 'token', {
//     value: configurateDB.token,
//     writable: true,
//     enumerable: true,
//     configurable: true
// });
// Object.defineProperty(configurateDB, 'password', {
//     value: configurateDB.password,
//     writable: true,
//     enumerable: true,
//     configurable: true
// });
// Object.defineProperty(configurateDB, 'user', {
//     value: configurateDB.user,
//     writable: true,
//     enumerable: true,
//     configurable: true
// });
// Object.preventExtensions(configurateDB);
// dataBase.dbName = 'newDBName';
// console.log(dataBase.dbName);
// configurateDB.token = 'newToken';
// console.log(configurateDB.token);
// configurateDB.newProperty = 'newValue';
// console.log(configurateDB.newProperty);
// delete configurateDB.user;
// console.log(configurateDB.user);

// 26.3

// let salaries = {
//     frontend: 2000,
//     backend: 1500,
//     design: 1000
// };
// Object.defineProperty(salaries, 'addSalaries', {
//     set(newSalaries) {
//         newSalaries.forEach((newSalary) => {
//             const [position, salary] = newSalary.split(': ');
//             this[position] = parseInt(salary);
//         });
//     },
//     enumerable: true
// });
// Object.defineProperty(salaries, 'sum', {
//     get() {
//         let sum = 0;
//         for (salary in this) {
//             if (!isNaN(this[salary])) {
//                 sum += this[salary];
//             }
//         }
//         console.log(sum);
//     },
//     enumerable: false
// });
// salaries.addSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800'];
// console.log(salaries);
// salaries.sum;

// 26.4

// let user = {
//     name: 'Mike',
//     surname: 'Davis',
//     age: 25,
// };
// Object.defineProperty(user, 'userInfo', {
//     get() {
//         let infoString = '';
//         for (const key in this) {
//             if (this.hasOwnProperty(key)) {
//                 infoString += `${key}: ${this[key]}, `;
//             }
//         }
//         infoString = infoString.slice(0, -2);
//         return infoString;
//     },
// });
// console.log(user.userInfo);
// user.login = 'MK_18';
// console.log(user.userInfo);

// 27.1

// let car = {
//     type: electric,
//     wheels: 4,
// }
// let sportCar = {
//     doors: 2
// }
// 27.1.1
// let sportCar = Object.create(car);
// sportCar.doors = 2;
// console.log(sportCar.type);
// console.log(sportCar.wheels);
// console.log(sportCar.doors);
// 27.1.2
// let passengerCar = Object.create(car);
// passengerCar.doors = 4;
// console.log(passengerCar.type);
// console.log(passengerCar.wheels);
// console.log(passengerCar.doors);
// 27.1.3
// let toyCar = Object.create(sportCar);
// toyCar.type = 'toy';
// console.log(toyCar.type);
// console.log(toyCar.wheels);
// console.log(toyCar.doors);
// 27.2
// let employees = {
//     pay(month, sum) {
//         if (!this.wallet) {
//             this.wallet = {};
//         }
//         this.wallet[month] = sum;
//     }
// };
// let frontendDeveloper = {
//     name: 'Mike',
// };
// Object.setPrototypeOf(frontendDeveloper, employees);
// let backendDeveloper = {
//     name: 'Bob',
// };
// Object.setPrototypeOf(backendDeveloper, employees);
// backendDeveloper.pay('June', 1500);
// console.log(backendDeveloper.wallet.June); 
// console.log(frontendDeveloper.wallet);
// 27.3
// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }
// let user_1 = new User ('Mike', 18);
// let user_2 = new User('Bob', 25);
// console.log(user_2);
// 27.4
// function UserType(name) {
//     for (let i = 0; i < name.length; ++i) {
//         this [i] = name[i];
//         if (i + 1 == name.length) {
//             Object.defineProperty(this, 'length', {
//                 enumerable: true,
//                 writable: false,
//                 configurable: true,
//                 value: i + 1
//             });
//         }
//     }
//     Object.setPrototypeOf(this, Array.prototype);
// }
// let admins = new UserType(['Mike', 'Bob', 'Nikola']);
// console.log(admins.join('; '));

// 28.1
// function count(expression) {
//     const values = getValues(expression);
//     switch (values[1]) {
//         case '+':
//             return showResult(sum(values));
//         case '-':
//             return showResult(subtract(values));
//         case '*':
//             return showResult(multiply(values));
//         case '/':
//             return showResult(divide(values));
//     }
//     function showResult(value) {
//         return value;
//     }
// }
// function sum(values) {
//     return values[0] + values[2];
// }
// function subtract(values) {
//     return values[0] - values[2];
// }
// function multiply(values) {
//     return values[0] * values[2];
// }
// function divide(values) {
//     return values[0] / values[2];
// }
// function getValues(expression) {
//     let values = expression.split(/([\+\-\*\/])/);
//     values = [parseInt(values[0]), values[1], parseInt(values[2])];
//     return values;
// }
// console.log(count('5+2'));

// 28.2
// function count(expression) {
//     function getValues(expression) {
//         let values = [...expression];
//         return values;
//     }
//     let values = getValues(expression);
//     if (values[1] === '/' && values[2] === '0') {
//         throw new Error("Can't divide by 0");
//     }
//     switch (values[1]) {
//         case '+':
//             return showResult(sum(values));
//         case '-':
//             return showResult(subtract(values));
//         case '*':
//             return showResult(multiply(values));
//         case '/':
//             return showResult(divide(values));
//     }
//     function showResult(value) {
//         return value;
//     }
// }
// function sum(values) {
//     return values[0] + values[2];
// }
// function subtract(values) {
//     return values[0] - values[2];
// }
// function multiply(values) {
//     return values[0] * values[2];
// }
// function divide(values) {
//     return values[0] / values[2];
// }
// try {
//     console.log(count('5+2'));
//     console.log(count('5/0'));
// } catch (error) {
//     console.error(error.name + ': ' + error.message);
// }

// 28.3
// function count(expression) {
//     function getValues(expression) {
//         let values = [...expression];
//         return values;
//     }
//     let values;
//     try {
//         if (typeof expression !== 'string') {
//             throw new Error("Please write in string format.");
//         }
//         values = getValues(expression);
//     } catch (error) {
//         console.log(error.name + ': ' + error.message);
//         values = [0, '+', 0];
//     }
//     switch (values[1]) {
//         case '+':
//             return showResult(sum(values));
//         case '-':
//             return showResult(subtract(values));
//         case '*':
//             return showResult(multiply(values));
//         case "/":
//             return showResult(divide(values));
//     }
//     function showResult(value) {
//         return value;
//     }
// }
// function sum(values) {
//     return +values[0] + +values[2];
// }
// function subtract(values) {
//     return +values[0] - +values[2];
// }
// function multiply(values) {
//     return +values[0] * +values[2];
// }
// function divide(values) {
//     if (+values[2] === 0) {
//         throw new Error("Can't divide by 0");
//     }
//     return +values[0] / +values[2];
// }
// try {
//     console.log(count('5*2'));
//     console.log(count(5*2));
//     console.log(count('5/0'));
// } catch (error) {
//     console.error(error.name + ': ' + error.message);
// }

//28.4
// function MakeUsers(name, age) {
//     this.name = name;
//     this.age = age;
// }
// function getUserAge() {
//     let age = prompt('Please enter your age:');
//     if (age === null) {
//         throw new Error('User canceled age input');
//     }
//     age = parseInt(age);
//     if (isNaN(age) || age < 0) {
//         throw new Error('Invalid age input');
//     }
//     return age;
// }
// let user;
// try {
//     const name = prompt('Please enter your name:');
//     if (name === null) {
//         throw new Error('User canceled name input');
//     }
//     const age = getUserAge();
//     user = new MakeUsers(name, age);
//     function showMovie(user) {
//         if (user.age >= 18) {
//             console.log('You can watch this movie');
//         } else {
//             console.log('Sorry, you are too young');
//         }
//     }
//     showMovie(user);
// } catch (error) {
//     console.error(error.name + ': ' + error.message);
// }
