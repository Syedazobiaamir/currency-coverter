
import inquirer from "inquirer";

let currency_exchange :any={
    "USD":1,
    "EUR":0.9,
    "JYP":113,
    "CAD":1.3,
    "AUD":1.65,
    "PKR":200,

}
let user =await inquirer.prompt([{
    name:"from_currency",
    type:"list",
    message:"currency covert from ",
    choices:["USD","EUR","JYP","CAD","AUD","PKR"],
},
{
    name:"to_currency",
    type:"list",
    message:"currency covert to",
    choices:["USD","EUR","JYP","CAD","AUD","PKR"],
},
{
    name:"amount",
    type:"input",
    message:"input amount you want to convert",
}
])
let fromamount =currency_exchange[user.from_currency];
let toamount = currency_exchange[user.to_currency];
let myamount = user.amount;

let baseAmount = myamount/fromamount;
let convertedamount = baseAmount*toamount;
console.log(`converted amount :${convertedamount}`);
