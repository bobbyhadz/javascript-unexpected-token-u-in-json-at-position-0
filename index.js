// SyntaxError: "undefined" is not valid JSON

// Uncaught SyntaxError: Unexpected token u in JSON at position 0
//   at JSON.parse(<anonymous>)
//     at index.js:3

// Uncaught SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data

// -----------------------------------------------------

console.log('bobbyhadz.com');

// ✅ Wrap the JSON.parse call in a try/except block

const value = undefined;

try {
  const result = JSON.parse(value);
  console.log(result);
} catch (err) {
  // 👇️ This runs
  console.log('Error: 👉️', err.message);
}

// -----------------------------------------------------

// All JSON values must be of type string

console.log(typeof undefined); // 👉️ undefined
console.log(typeof {}); // 👉️ object

// 👇️ string
console.log(typeof JSON.stringify({name: 'bobby'}));

// -----------------------------------------------------

// Clear your local storage

localStorage.clear();

// -----------------------------------------------------

// Convert the value to JSON before writing it to local storage

const obj = {name: 'Tom'};

// 👇️ Store a JSON value in local storage
localStorage.setItem('person', JSON.stringify(obj));

// 👇️ parse the value when accessing it
const result = JSON.parse(localStorage.getItem('person'));
console.log(result); // 👉️ {name: 'Tom'}

// -----------------------------------------------------

// Wait for the page to load before fetching data

// ✅ using fetch
window.onload = function getUser() {
  fetch('https://randomuser.me/api/')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }

      return response.json();
    })
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
};
