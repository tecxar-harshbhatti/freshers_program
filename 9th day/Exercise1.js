const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// countries.forEach(cntry=>console.log(cntry))
// names.forEach(name=>console.log(name))
// number.forEach(num=>console.log(num))
// products.forEach(product=>console.log(product))


// const countryUpperCase = countries.map((country)=>country.toUpperCase())
// console.log(countryUpperCase)
// const countryLength = countries.map((country)=>country.length)
// console.log(countryLength)
// const square = number.map((num)=>num*num)
// console.log(square)
// const nameUpper = names.map((name)=>name.toUpperCase())
// console.log(nameUpper)
// const sortProduct = products.map((prdct)=>prdct.price)
// console.log(sortProduct)



// const countryLand = countries.filter((country)=>country.includes('land'))
// console.log(countryLand)
// const countryLength = countries.filter((country)=>country.length>6)
// console.log(countryLength)
// const countryLength1 = countries.filter((country)=>country.length<=6)
// console.log(countryLength1)
// const countryName = countries.filter((country)=>country.startsWith('E'))
// console.log(countryName)
// const prdctValue = countries.filter((country)=>country.price)
// console.log(prdctValue)



// function getStringLists([a,b,c,d])
// {
//   let newArray = [a,b,c,d].toString()
//   console.log(newArray)
// }
// getStringLists(['harsh','bhatti',23,true])

// const sum = number.reduce((acc, cur)=> acc + cur, 0)
// console.log(sum)






// const sentence = countries.reduce((accumulator, country, index) => {
//   // Append the country to the accumulator
//   accumulator += country;

//   // Add a comma and space if it's not the last country
//   if (index !== countries.length - 1) {
//     accumulator += ', ';
//   }

//   // Add "and" before the last country
//   if (index === countries.length - 2) {
//     accumulator += 'and ';
//   }

//   return accumulator;
// }, '') + ' are north European countries';

// console.log(sentence);



const areSome = names.some((n1)=>n1.length>7)
console.log(areSome)   //true

const areEvery = countries.every((country)=>country.includes('land'))
console.log(areEvery)  //false

const findCountry = countries.find((country)=>country.length)
console.log(findCountry)

const findIndexCountry = countries.findIndex((country)=>country.length==6)
console.log(findIndexCountry)

const findIndexCountry1 = countries.findIndex((country)=>country.includes('russia'))
console.log(findIndexCountry1)

const findIndexCountry2 = countries.findIndex((country)=>country.includes('norway'))
console.log(findIndexCountry2)