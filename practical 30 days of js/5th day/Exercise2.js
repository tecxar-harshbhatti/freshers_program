let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.length)
const arr = text.split(" ")
console.log(arr)
console.log(arr.length)


const shoppingCart = ['Milk', 'Coffee', 'Green Tea', 'Honey']
shoppingCart.push('Meat')
console.log(shoppingCart)
shoppingCart.push('sugar')
console.log(shoppingCart)
shoppingCart.pop('Honey')
console.log(shoppingCart)

  
  
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sort = ages.sort()
console.log(sort)

console.log(ages[0])
let middle = ages[Math.round((ages.length - 1)/2)]
console.log(middle)

console.log(ages.reverse())
console.log(ages[0])