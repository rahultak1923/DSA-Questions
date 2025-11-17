// question 2.js dono array ke same index ke elements ko add karke new array banao
console.log("question 2 - arr1+arr2 = arr new array ")

let arr1= [1 ,2 ,3 ];
let arr2=[2,3,4];

let arr = []
let a ,b 
for(let i =0; i<arr1.length; i++){
    for(let j=i;j==i; j++){
        a = arr1[i]
        b = arr2[j]
        let sum = a+b
         arr.push(sum)
    }
    }
    console.log(arr)