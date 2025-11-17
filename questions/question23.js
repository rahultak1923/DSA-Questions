// question23.js Heron's formula ka use karke triangle ka area calculate karo jisme sides 5,4,3 hain
let a = 5;
let b = 4;
let c = 3;

let s = (a+b+c)/2;

console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));