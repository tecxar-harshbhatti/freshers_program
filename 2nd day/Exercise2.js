let string = "There is no exercise better for the heart than reaching down and lifting people up."

console.log(string)

let num = 10
let num1 = 10

console.log(num==num1) //true

let n1 = 9.8
let n2 = 10

console.log(n1==n2) //false

console.log(Math.round(n1))
console.log(n1==n2) 

let str1 = "python and jargon"
let pattern = /on/gi
console.log(str1.match(pattern))

let str2 = "I hope this course is not full of jargon"
console.log(str2.includes('jargon')) //true

const rand = Math.floor(Math.random()*100) 
console.log(rand)   //72

const rand2 = Math.floor(Math.random()*50)+50 
console.log(rand2)  //86

const rand3 = Math.floor(Math.random()*255)
console.log(rand3)  //216

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t2\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')

let str3 = "You cannot end a sentence with because because because is a conjunction"
console.log(str3.substring(0,31))