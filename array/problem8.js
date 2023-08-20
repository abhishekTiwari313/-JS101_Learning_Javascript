//spread operator (...)

let arr = [1,2,3,4];

//make a copy of the arry 
let arr2 = [...arr];
console.log(arr2);

let arr1 = [1,2,3];

let data = [4,5,6];

let details = ["Aman","Delhi", ...data, ...arr1,44,55,66];
console.log(details);