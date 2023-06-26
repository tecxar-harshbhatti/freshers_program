let firstname = 'harsh'
let sarname = 'bhatti'
let age = 23
let country = 'india'
let city = 'Ahmedabad'
let isMarried = false

console.log(typeof(firstname))
console.log(typeof(sarname))
console.log(typeof(age))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(isMarried))

let num1 = '10'
let num2 = 10

console.log(typeof(num1))
console.log(typeof(num2))
console.log(num1==num2)     //true
console.log(num1===num2)    //false

let num3 = '9.8'
let num3int = parseInt(num3)
console.log(num3int)
let num4 = 10
console.log(num3==num4)     //false
console.log(num3===num4)    //false

let isTrue = 1>0
console.log(isTrue)         //true
let isTrue2 = 20!=21
console.log(isTrue2)        //true
let isTrue3 = 15!=20
console.log(isTrue3)        //true

let isFalse = 10<1
let isFalse2 = 20==21
let isFalse3 = 85!=85
console.log(isFalse3)       //false
console.log(isFalse2)       //false
console.log(isFalse)        //false


4 > 3       //true
2.4 >= 3    //false
3.4 < 3     //false
4.4 <= 3    //flase
5.4 == 4    //false
6.4 === 4   //flase
7.4 != 4    //true
8.4 !== 4   //true
9.4 != '4'  //true
10.4 == '4' //flase
11.4 === '4'//false

let check = 11.4 === '4'
console.log(check)


4 > 3 && 10 < 12    //true
4 > 3 && 10 > 12    //false
4 > 3 || 10 < 12    //true
4 > 3 || 10 > 12    //true
!(4 > 3)            //false
!(4 < 3)            //true
!(false)            //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4')        //true

let check1 =!(4 === '4')
console.log(check1)

let string = "dragon and python"
console.log(string.includes(!'on')) //false


const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())