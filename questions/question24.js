// question24.js user se age input leke check karo ki vo vote kar sakta hai ya nahi (age limit 18 hai)
let age = Number(prompt("enter your age"));

if(isNaN(age)){
    console.log("wrong intput")
}
if(age>=18){
    console.log("you can vote")
}else{
    console.log("you can't vote")
}