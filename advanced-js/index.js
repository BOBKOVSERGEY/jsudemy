

// function constructor
//создаем объект
/*var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// добавляем метод в объект
Person.prototype.calculateAge = function() {
    console.log(this.name + ' ' + (2016 - this.yearOfBirth));
}

// добавляем свойство в объект
Person.prototype.lastName = 'Smith';

// создаем экземпляр объекта
var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

*/

// Object.create

/*var personProto = {
    calculateAge: function() {
        console.log(this.name + ' ' + (2016 - this.yearOfBirth));
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'desinger' }
})



// Primitives мы Object 
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisabon'
}
console.log(age);
console.log(obj.city);

console.log('-------------------');
function change(a, b) {
    a = 30;
    b.city = 'San Francisko';
}

change(age, obj);
console.log(age);
console.log(obj.city);*/

/* Первокласные функции 

var years = [1990, 1965, 1937, 2005, 1998, 2009];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        // вставляем элемент в конец массива
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }  else {
        return -1;
    }
    
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/

/* Функции возвращающие функции 

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX desing is');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you tech ' + name + '?' );
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?' );
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var desingerQuestion = interviewQuestion('designer');
desingerQuestion('Liza');
desingerQuestion('Maks');
desingerQuestion('Michal');
desingerQuestion('Elisabet');
desingerQuestion('Donald');
*/

/* IIFE */

(function() {

})();

// передаем аргумент в IIFE
(function(argument) {
    var score = Math.random() * 10;
    var cell = Math.round(score)
    console.log(score + ' ' + argument + ' ' + cell);
})(5);

console.log('---------------');

/**Closures*/
(function() {
    function retirement(retirementAge) {
        var a = ' years left until retirement';
        var now = new Date();
        var getYear = now.getFullYear();
        return function(yearOfBirth) {
            var age = getYear - yearOfBirth;
            console.log((retirementAge - age) + a);
        }
    }

    // можно так
    var retirementUS = retirement(65);
    retirementUS(1987);

    // или 
    retirement(65)(1987);
})();



















