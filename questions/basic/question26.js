// question26.js user se electricity unit input leke bill calculate karo according to given slabs
// 0-100 : 4rs/unit
// 101-200 : 6rs/unit
// 201-400 : 8rs/unit
// 400+ : 13rs/unit

let unit = Number(prompt("enter electricity unit "))
let amount = 0;
if(unit>400){
    amount += (unit-400)*13
}
if(unit>200 && unit<400){
    amount+= (unit-200)*8
}
if(unit>100 && unit<200){
    amount+= (unit-100)*6
}
unit = 100
amount+= (unit*4);
console.log(amount)
