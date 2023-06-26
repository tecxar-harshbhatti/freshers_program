let string = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern5 = /\d+/g
let match = string.match(pattern5)
console.log(match)
// let a = match.toString()
// const r =Array.from(a) 
// var x = parseInt(...match,3);
// const t =a.split(" ")
// console.log("t",t);
// console.log(x);
// console.log(a)
// console.log(typeof(+a))

const a =[]
for (let i = 0; i < match.length; i++) {
    a.push(Number(match[i]))
}
console.log(a);
const f = a.reduce((a,b) => a+ b,0)
console.log(f);