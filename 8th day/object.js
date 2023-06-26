// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {

// }
// console.log(a, b) // accessible



// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName}${this.lastName}`
//     },
//     'phone number': '+3584545454545'
//   }

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.location) // undefined

// // value can be accessed using square bracket and key name
// console.log(person['firstName'])
// console.log(person['lastName'])
// console.log(person['age'])
// console.log(person['age'])
// console.log(person['location']) // undefined

// // for instance to access the phone number we only use the square bracket method
// console.log(person['phone number'])



// const person1 = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city:'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
//       street: 'Heitamienkatu 16',
//       pobox: 2002,
//       city: 'Helsinki'
//     },
//     getPersonInfo: function() {
//       return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//     }
//   }

// const copyPerson = Object.assign({}, person1)
// console.log(copyPerson)

// const keys = Object.keys(copyPerson)
// console.log(keys)

// const address = Object.keys(copyPerson.address)
// console.log(address) 

// const values = Object.values(copyPerson)
// console.log(values)

// const entries = Object.entries(copyPerson)
// console.log(entries)

// console.log(copyPerson.hasOwnProperty('name'))
// console.log(copyPerson.hasOwnProperty('score'))





// const callback = (n) => {
//     return n ** 2
//   }

//   function cube(callback, n) {
//     return callback(n) * n
//   }
// console.log(cube(callback, 3))




// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))


// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))


// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 1000)


function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000)


const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

const nums = numbers.some((n1)=>typeof n1 === 'number')
console.log(nums) //true


const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) 