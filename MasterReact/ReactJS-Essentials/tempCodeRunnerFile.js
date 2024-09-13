let students = [
  { name: "John", age: 20, grade: 90 },
  { name: "Jane", age: 21, grade: 80 },
  { name: "Ali", age: 19, grade: 95 },
  { name: "Shazil", age: 20, grade: 99 },
];

//if we want only those students whose grade are greater then 90 then we can use filter

let toppers = students.filter((student) => student.grade > 90);
console.log(toppers);
