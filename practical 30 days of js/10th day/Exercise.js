const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

let A = new Set(a)
console.log(A)

let numberSet = new Set()
for(let i=0; i<=10; i++){
    numberSet.add(i)
}console.log(numberSet)

let x = numberSet.delete(7)
console.log(x)
console.log(numberSet)


numberSet.clear()
console.log(numberSet)



const string = ['a','b','c','d','e']
let x1 = new Set(string)
console.log(x1)


const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
for(const com of companies){
    console.log(com)
}



const num1 = [11,12,13,14]
const num2 = [12,14,15,16]
const union = [...num1, ...num2]
console.log(union)

const n1 = new Set(union)
console.log(n1)


const a1 = new Set(num1)
const a2 = new Set(num2)

let intersect = num1.filter((num)=>a2.has(num)) 
let a3 = new Set(intersect)
console.log(a3)


const with1 = num1.filter((num)=>!a2.has(num)) 
const a4 = new Set(with1)
console.log(a4)