const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products1 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]




const newPrice = products1.map((prc)=>console.log(prc.price))
console.log(newPrice)
let sum = 0
const x = newPrice.map((num)=>sum += num)
console.log(x)
