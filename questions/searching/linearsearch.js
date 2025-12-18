// check value one by one 
let arr = [10, 23, 45, 70, 11, 15];
let target = 11;

for(let i = 0 ; i<arr.length;i++){
    if(arr[i]==target){
        console.log("target index is ", i)
        break;
    }
  
}

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // index
    }
  }
  return -1; // not found
}

let numbers = [10, 25, 30, 45, 60];
let result = linearSearch(numbers, 30);

if (result !== -1) {
  console.log("Element found at index:", result);
} else {
  console.log("Element not found");
}
