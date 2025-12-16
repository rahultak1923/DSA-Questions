//reverce array 
let arr = [ 1,2,3,4,5,3];
let temp = [];
let t = 0;
for(let i = arr.length-1; i>=0 ; i--){
    temp[t]=arr[i]
    t++
}
console.log(temp)