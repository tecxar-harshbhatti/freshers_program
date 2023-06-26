let base = 20
let height = 10

let area = (0.5 * base * height)
console.log(area)

let a = 5
let b = 4
let c = 3

let perimeter = (a+b+c)
console.log(perimeter)


// var length = prompt("Enter length") * 1;
// var width = prompt("Enter width") * 1;

// console.log(2*(length + width));


// const pi = 3.14
// var r = prompt("Enter Radious") *1;
// var circle = (2*pi*r)
// console.log(circle)

// var hours = prompt("Enter your hour's") * 1;
// var rent = prompt("Enter Rent") * 1;
// var Earning = (hours*rent)
// console.log(Earning)

var string = "harsh"
var length = (string.length)
console.log(length)

if(string.length>7)
{
    console.log('Your name is big')
}
else
{
    console.log('Your name is short')
}


let firstname = "Harsh"
let str1  = (firstname.length)
let sarname = "Bhatti"
let str2 = (sarname.length)

if(str1 > str2)
{
    console.log(`Your firstname ${firstname} is bigger then your sarname ${sarname}`)
}
else
{
    console.log(`Your firstname ${firstname} is smaller then your sarname ${sarname}`)

}


let myage = 23
let yourage = 20
let calculate = (myage - yourage)
console.log(`I am ${calculate} years older then you`)


// var age = prompt("Enter your birth year") * 1;
var curr_year = 2023
// var result = (curr_year - age)
// var diff = (18 - result)

// if(result > 18)
// {
//     console.log(`You are ${result}. You are older enough to drive`)
// }
// else
// {
//     console.log(`You are ${result}. you will be allowed to drive after ${diff} years`)
// }


// var age1 = prompt("Enter your age") * 1;
// var year_second = 31536000
// var total_seconds = (age1 * year_second)
// console.log(total_seconds)

let str7 = '5'
console.log(str7.padStart(2 ,'0'));
var date = new Date()
var year = (date.getFullYear())
var month = (date.getMonth())
var dat = (date.getDate())
var hour = (date.getHours())
var minute = (date.getMinutes())
var sec = (date.getSeconds())
console.log(`${year}-${month}-${dat}    ${hour}:${minute}`)
console.log(`${dat}-${month}-${year}    ${hour}:${minute}`)
console.log(`${dat}/${month}/${year}    ${hour}:${minute}`)
console.log(`${sec}`)