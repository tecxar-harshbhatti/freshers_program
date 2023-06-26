const empty = Array()
console.log(`Array is empty:` + empty)

const a1 = ['harsh', 23, 'hardik', 20, false]
console.log(a1.length)  //5

const a2 = [1,2,3,4,5,6]
console.log(a2[0])  //1
let lastItem = a2.length - 1
l1 = a2[lastItem]
console.log(l1) //6

let middleItem = a2[Math.round((a2.length - 1)/2)]
console.log(middleItem) //4

const a3 = ['virat',18,'kohli',true,150.66,{country:'india', position:'king'}]
console.log(a3) //['virat', 18, 'kohli', true, 150.66, {…}]
console.log(a3.length)  //6


const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length) //7

console.log(itCompanies[0]) //Facebook

let lastPos = itCompanies.length - 1
p1 = itCompanies[lastPos]
console.log(p1) //Amazon

let middle = itCompanies[Math.round((itCompanies.length - 1)/2)]
console.log(middle)
console.log(itCompanies)


let string = (itCompanies.toString())
console.log(string)
let upper = string.toUpperCase()
console.log(upper)



let str1 = 'Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.'
const arr = str1.split()
console.log(arr)

let index = itCompanies.indexOf('tecxar')

if(index === -1)
{
    console.log('not exist')
}
else
{
    console.log('exist')
}
    //not exist


let a4 = itCompanies.sort()
console.log(a4)

let a5 = itCompanies.reverse()
console.log(a5)

let a6 = itCompanies.slice(3,7)
console.log(a6)

const itCompanie = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let a7 = itCompanie.slice(0,4)
console.log(a7)

const itCompaniess = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let a8 = itCompaniess.slice(3,4)
console.log(a8)

itCompaniess.shift()
console.log(itCompaniess)

console.log(itCompaniess.pop())

let a9 = itCompaniess.splice(0,0)
console.log(a9)
