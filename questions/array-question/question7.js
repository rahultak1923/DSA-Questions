//reverce array in place without using extra array
let arr = [1,3,4,5,3,2,4,3,33];
let i = 0 ;
let  j = arr.length-1;
while(i!= j){
  
   let  temp = arr[i];
    arr[i]= arr[j];
    arr[j] = temp;
    i++;
    j--;

}
console.log(arr)