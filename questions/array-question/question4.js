let arr = [1,3,4,5,3,2,4,3,33];

let big = arr[0]
for(let i = 0 ; i<arr.length; i++){
    if(big<arr[i]){
        big = arr[i];
    }
}
console.log(arr)
console.log(big)