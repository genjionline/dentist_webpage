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
// 32.1
