let firstName = 'John';
let lasttName = 'Smith';

const yearOfBirth = 1990;

function calcAge(year) {
  var now = new Date();
  var getYear = now.getFullYear();
  return getYear - year;
}

console.log('This is ' + firstName + ' ' + lasttName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
console.log(`This is ${firstName} ${lasttName} He was born in  ${yearOfBirth} Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lasttName}`;

console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(4));


// arrow function

const years = [1990, 1965, 1982, 1937];

// es5
var ages5 = years.map(function (el) {
  var now = new Date();
  var getYear = now.getFullYear();
  return getYear - el;
});

console.log(ages5);

// es 6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}`);

console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element - ${index + 1}: ${age}`
});

console.log(ages6);

//es5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector('.green').addEventListener('click', function () {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
};

//box5.clickMe();

//ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
};

//box6.clickMe();

// const box66 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//     document.querySelector('.green').addEventListener('click', () => {
//       var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     });
//   }
// };
//
// box66.clickMe();

//ES5
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(function (el) {
    return this.name + ' is friends with ' + el;
  });
  console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);

