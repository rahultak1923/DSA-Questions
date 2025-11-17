// question42.js print karo star pattern jisme diagonal me stars ho
// jaise agar user ne 5 input diya to output hoga
// *               *
//   *           *
//     *       *
//       *  *
//         * 
let prompt = require("prompt-sync")();

let n = Number(prompt("enter any number "))

for(let i = 1; i<=n; i ++){
    for(let j = 1; j<=n*2; j++){
        if(i==j || i+j == n*2){
            process.stdout.write("* ")
        }
        else{
           process.stdout.write(" ")
        }
    }
    
    console.log(" ")
}