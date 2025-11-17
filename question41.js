// question41.js print karo star pattern jaha pe pehle row me n stars ho aur har row me ek star kam hota jaye
// aur har row ke baad usi row number ke barabar hyphen (-) print ho
// jaise agar user ne 4 input diya to output hoga
// * * * * - - - - 
// * * * - - - 
// * * - - 
// * -
let prompt = require("prompt-sync")();

let n = Number(prompt("enter any number "))
temp = n 

for(let i = 1; i<=n; i ++){
    for(let j = temp; j>=1; j--){
        process.stdout.write("* ")
    }
    temp=temp-1
    for(let k = 1; k<=i;k++){
        process.stdout.write("- ")
    }
    console.log(" ")
}