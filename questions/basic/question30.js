// user ne jo number diya hai usko 1 se lekar us number tak ke sare natural numbers ka sum
let n = Number(prompt("enter any number"))
if(isNaN(n)){
    console.log("this is invalid input")
}
else{
    if(n>0){
        let sum = 0 
        for(let i = 0 ; i<=n;i++){
            sum = sum +i;

        }
        console.log(sum)
    }
}

// factorial
let a = Number(prompt("enter the second number"))
if(a>0){
    let total = 1
    for(let i = 1 ; i<=a;i++){
        total = total * i 
    }
    console.log(total)
}