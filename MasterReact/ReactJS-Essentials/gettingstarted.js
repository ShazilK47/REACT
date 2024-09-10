//Important JS concepts for react
// 1. mutable /  immutable
// 2. Destructuring

//In react, states are immutable ;
// let suppose we cannot directly change state then what? let's see

let state = [1, 2, 3, 4];
let copy = state; // => here we gave the reference of state(not copied it);

//so in order to copy an array or object we use
//spread operator (...)

let copy2 = [...state];
copy2.push(5);

console.log(copy2);

// 2 . Destructuring (Arrays and object)

let myId = {
  name: "shazil Khan",
  accounts: {
    FaceBook: {
      first: "sk",
      sec: "ak",
    },
  },
};

//let's destructure my sec account of facebook so we can use it again and again easily as a variable

const { sec } = myId.accounts.FaceBook; //wahan tak jao jahan wo property available ho

console.log(sec);

//now destructuring Arrays

let arr = ["shazil khan", function () {}, "Abdullah Khan"];

const [myname, , broName] = arr; //=> to skip a value we use (, , )

console.log(myname, broName);
