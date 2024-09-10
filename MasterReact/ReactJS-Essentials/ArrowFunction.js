//a short way to write function

let func1 = () => {
  console.log("Arrow function 1");
};

//with single parameter => no need of () round braces
let func2 = (val) => {
  console.log(`Arrow function ${val}`);
};
console.log(func2(2));

//with multiple parameter => round braces () must

let func3 = (val1, val2) => {
  console.log(`Arrow function ${val1}, ${val2}`);
};
console.log(func3(3, 3));

//with implicit return
let func4 = (val) => val * 4;
console.log(func4(4));

//when implicit return an object

let func5 = () => ({ name: "shazil khan", age: 20 }); //=> to implicit return an object we rap it in a () round braces
console.log(func5());
