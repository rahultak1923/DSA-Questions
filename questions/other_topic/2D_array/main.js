let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6

function matrixfun(matrix){
    for(let i = 0; i<matrix.length;i++){
        console.log(matrix)
        for(let j =0 ;j<matrix.length;j++){
            console.log(matrix)
        }
    }
}