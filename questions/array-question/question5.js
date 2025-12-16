//find largest and second largest number in array
let arr = [ 1,2,3,4,5,3];

let big = Math.max(arr[0],arr[1]);
let min = Math.min(arr[0],arr[1]);
for(let i =2; i<arr.length; i++){
    if(arr[i]>big){
        big = arr[i];
    }
    else if (arr[i]>min){
        min = arr[i];
    }
}
console.log(big)
console.log(min)