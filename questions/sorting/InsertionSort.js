function insertionSort(arr){
    let n = arr.length;

    for(let i = 0; i<n;i++){
        let key = arr[i];
        let j = i-1;

        while(j>=0 && arr[j]>key){
            arr[j+1]= arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
}
let arr = [8,3,5,2];
console.log(insertionSort(arr))