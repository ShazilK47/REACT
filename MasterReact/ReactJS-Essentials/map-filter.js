// map - filter (most use in react)
//both use on an array => use to perfom something on an array
// map - filter => always return a new array

//map: => always return a whole array (with some changes we asked for)

let count = [1, 2, 3, 4, 5];
let doubleCount = count.map((item) => item * 2);
console.log(doubleCount);

//with conditional changes (eg. only change num greater then 5)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let changNums = numbers.map((nums) => (nums > 5 ? nums * 2 : nums));
console.log(changNums);

//filter: => changes the size of the array => only returns values with specific conditions(true)

//for eg: we want only even numbers from an array

let naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(naturalNumbers);

let evenNumbers = naturalNumbers.filter((nums) => nums % 2 == 0);
console.log(evenNumbers);

let oddNumbers = naturalNumbers.filter((nums) => nums % 2 != 0);
console.log(oddNumbers);

//other example
let students = [
  { name: "John", age: 20, grade: 90 },
  { name: "Jane", age: 21, grade: 80 },
  { name: "Ali", age: 19, grade: 95 },
  { name: "Shazil", age: 20, grade: 99 },
];

//if we want only those students whose grade are greater then 90 then we can use filter

let toppers = students.filter((student) => student.grade > 90);
console.log(toppers);
