var name1 = "Tomas" //deprecated due to security reasons
let name2 = "Honza" 
const name3 = "Ondra"

name2 = "Michal"
//name3 = "Adela" konstantni promenna se nemeni

document.body.innerHTML = name1 + " " + name2 + " " + name3

let hourRate = 200
let hoursAmount = 100
let payroll = hourRate * hoursAmount

hourRate = 400 //payroll will not change in this case

document.body.innerHTML = payroll

//comment
