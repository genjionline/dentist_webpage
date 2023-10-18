// 30.1
// let h2Element = document.querySelector("h2");
// if (h2Element) {
//     h2Element.textContent = "DOM method description";
// }
// 30.2
// let ukrainianLinks = document.querySelectorAll('[href*="/ua/"]');
// console.log(ukrainianLinks);
// 30.3
// let ul = document.getElementById('ul');

// let li0 = document.createElement('li');
// li0.id = 'null';
// li0.textContent = '0';

// let li2 = document.createElement('li');
// li2.id = 'second';
// li2.textContent = '2';

// let li4 = document.createElement('li');
// li4.id = 'fourth';
// li4.textContent = '4';

// ul.insertBefore(li0, ul.firstElementChild);
// ul.insertBefore(li2, ul.children[2]);
// ul.appendChild(li4);
//30.4
// let h1 = document.querySelector('h1');

// let link = document.createElement('a');
// link.id = 'link';
// link.href = 'https://dom.spec.whatwg.org/';

// let h1Clone = h1.cloneNode(true);
// link.appendChild(h1Clone);
// let parent = h1.parentNode;

// parent.replaceChild(link, h1);
//31.1
// function getData(url) {
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         const filteredData = data.filter(item => item.title.charAt(0).toLowerCase() === 'a');
//         console.log(filteredData);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
  
//   getData('https://jsonplaceholder.typicode.com/todos/');
//31.2
// async function getData(url) {
//     try {
//       const response = await fetch(url);
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await response.json();
//       const filteredData = data.filter(item => item.title.charAt(0).toLowerCase() === 'a');
//       console.log(filteredData);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
//   getData('https://jsonplaceholder.typicode.com/todos/');
  //31.3
  // async function fetchDataAndDisplay() {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     const data = await response.json();
  //     const userAData = data.filter(item => item.title.toLowerCase().startsWith('a'));
  //     const userABData = userAData.filter(item => item.title.toLowerCase().startsWith('ab'));

  //     const userADiv = document.querySelector('.user-a');
  //     const userABDiv = document.querySelector('.user-ab');
  
  //     userAData.forEach(obj => {
  //       const objString = JSON.stringify(obj);
  //       userADiv.insertAdjacentHTML('beforeend', objString + '<br>');
  //     });
  
  //     userABData.forEach(obj => {
  //       const objString = JSON.stringify(obj);
  //       userABDiv.insertAdjacentHTML('beforeend', objString + '<br>');
  //     });
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
  // fetchDataAndDisplay();

//31.4
// async function fetchDataAndDisplay() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await response.json();
//       const userAData = data.filter(item => item.title.toLowerCase().startsWith('a'));
//       const userABData = userAData.filter(item => item.title.toLowerCase().startsWith('ab'));
  
//       const userADiv = document.querySelector('.user-a');
//       const userABDiv = document.querySelector('.user-ab');
  
//       const addAButton = document.querySelector('.add-a');
//       addAButton.addEventListener('click', () => {
//         userADiv.innerHTML = '';
//         userAData.forEach(obj => {
//           const objString = JSON.stringify(obj);
//           userADiv.insertAdjacentHTML('beforeend', objString + '<br>');
//         });
//       });
  
//       const addABButton = document.querySelector('.add-ab');
//       addABButton.addEventListener('click', () => {
//         userABDiv.innerHTML = '';
//         userABData.forEach(obj => {
//           const objString = JSON.stringify(obj);
//           userABDiv.insertAdjacentHTML('beforeend', objString + '<br>');
//         });
//       });
  
//       const addAllButton = document.querySelector('.add-all');
//       addAllButton.addEventListener('click', () => {
//         userADiv.innerHTML = '';
//         userAData.forEach(obj => {
//           const objString = JSON.stringify(obj);
//           userADiv.insertAdjacentHTML('beforeend', objString + '<br>');
//         });
  
//         userABDiv.innerHTML = '';
//         userABData.forEach(obj => {
//           const objString = JSON.stringify(obj);
//           userABDiv.insertAdjacentHTML('beforeend', objString + '<br>');
//         });
//       });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   fetchDataAndDisplay();
// 34.1
// const TaxMixin = {
//   vat() {
//     return this.price + this.price * 0.2;
//   },

//   exciseDuty() {
//     return (this.price + this.price * 0.3) + 10;
//   },

//   singleTax() {
//     return this.price + 1;
//   }
// };
// class Cola {
//   constructor (brand, price) {
//     this.brand = brand;
//     this.price = price;
//   }
// }
// Object.assign(Cola.prototype, TaxMixin);
// class Whiskey {
//   constructor (brand, price) {
//     this.brand = brand;
//     this.price = price;
//   }
// }
// Object.assign(Whiskey.prototype, TaxMixin);
// class Ice {
//   constructor (price) {
//     this.price = price;
//   }
// }
// Object.assign(Ice.prototype, TaxMixin);
// let cocaCola = new Cola('Coca-Cola', 10);
// let johnwalker = new Whiskey('john walker', 100);
// let ice = new Ice(2);
// console.log(cocaCola.vat());
// console.log(johnwalker.exciseDuty());
// console.log(ice.singleTax());
// 34.2
// function uniqueString(input) {
//   const words = input.split(';').map(word => word.trim());
//   const uniqueWords = new Set();
//   for (const word of words) {
//     uniqueWords.add(word);
//   }
//   return Array.from(uniqueWords);
// }
// console.log(uniqueString("cherry; orange; cherry; banana; banana"));
// 34.3
// function getUniquePhoneNames() {
//   const phoneList = document.querySelectorAll('.shop-list li');
//   const uniquePhoneNames = new Set();
//   phoneList.forEach((li) => {
//     uniquePhoneNames.add(li.textContent);
//   });
//   return uniquePhoneNames;
// }
// function createUniquePhoneList() {
//   const uniquePhoneNames = getUniquePhoneNames();
//   const list = document.createElement('ul');
//   for (let item of uniquePhoneNames) {
//     let li = document.createElement('li');
//     li.textContent = item;
//     list.appendChild(li);
//   }
//   document.body.appendChild(list);
// }
// createUniquePhoneList();
// 34.4
// let mike = {name: 'Mike', age: 18}
// let bob = {name: 'Bob', age: 25}
// let nikola = {name: 'Nikola', age: 32}
// function createUserVisitsCounter() {
//   const userVisits = new Map();

//   function updateUserVisits(user) {
//     if (userVisits.has(user)) {
//       userVisits.set(user, userVisits.get(user) + 1);
//     } else {
//       userVisits.set(user, 1);
//     }
//   }

//   function getVisits(user) {
//     return userVisits.get(user) || 0;
//   }

//   return { updateUserVisits, getVisits };
// }

// const mikeCounter = createUserVisitsCounter();
// const bobCounter = createUserVisitsCounter();
// const nikolaCounter = createUserVisitsCounter();

// mikeCounter.updateUserVisits(mike);
// mikeCounter.updateUserVisits(mike);
// mikeCounter.updateUserVisits(mike);
// bobCounter.updateUserVisits(bob);
// nikolaCounter.updateUserVisits(nikola);
// nikolaCounter.updateUserVisits(nikola);

// console.log(mikeCounter.getVisits(mike));
// console.log(bobCounter.getVisits(bob));
// console.log(nikolaCounter.getVisits(nikola));
// 35.1
// fetch('home-work-data.json')
//   .then(response => response.json())
//   .then(data => {
//     showAdminName(data);
//   })
//   .catch(error => console.error(error));

// function showAdminName(data) {
//   for (const key in data) {
//     const user = data[key];
//     if (user.isAdmin === true) {
//       console.log(`Admin's name: ${user.name}`);
//     }
//   }
// }
// 35.2
// let nikola = { firstName: 'Nikola', lastName: 'Tesla' };
// let bob = { firstname: 'Bob' };
// let mike = { lastname: 'Smith' };
// let michael = {};

// let getFullName = function (user) {
//   return `${user.firstName} ${user.lastName}`;
// };
// console.log(getFullName(nikola))
// console.log(getFullName(bob))
// console.log(getFullName(mike))
// console.log(getFullName(michael))
// let handler = {
//   get(target, prop) {
//     if (prop === 'firstName') {
//       return target[prop] || '';
//     } else if (prop === 'lastname') {
//       return target[prop] || '';
//     } else {
//       return getFullName(target);
//     }
//   },
// };

// let proxyNikola = new Proxy(nikola, handler);
// let proxyBob = new Proxy(bob, handler);
// let proxyMike = new Proxy(mike, handler);
// let proxyMichael = new Proxy(michael, handler);

// console.log(getFullName(proxyNikola));
// console.log(getFullName(proxyBob));
// console.log(getFullName(proxyMike));
// console.log(getFullName(proxyMichael));
// 35.3
// let users = [
//   {name: 'Nikola', age: 18, id: 1},
//   {name: 'Bob', age: 25, id: 2},
//   {name: 'Mike', age: 32, id: 3},
// ];

// localStorage.setItem('usersData', JSON.stringify(users));
// function sayHelloToUser(id) {
//   let usersData = localStorage.getItem('usersData');

//   if (usersData) {
//     let users = JSON.parse(usersData);
//     let user = users.find((user) => user.id === id);

//     if (user) {
//       console.log(`Hello: ${user.name}`);
//     } else {
//       console.log('User not found');
//     }
//   } else {
//     console.log('No user data in localStorage');
//   }
// }
// sayHelloToUser(3);
