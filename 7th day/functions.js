const cnvtArray = (...args) => {
    console.log(args)
  } 
cnvtArray(1, 2, 3, 4)


const sumAllnums = (...args) => {
    let sum = 0
    for(let nums of args){
        sum += nums
    }
    return sum
}
console.log(sumAllnums(1,2,3,4))


const square = function(n){
    return n * n 
}
console.log(square(2))


function greetings(name = 'Peter') 
{
    let message = `${name} welcome to 30 Days Of JavaScript!`
    return message
}  
console.log(greetings())
console.log(greetings('hardik'))


function calculateage(birth, current = 2023)
{
    let age = current - birth
    return age
}
console.log(calculateage(2000))


