function printArray([a,b,c])
{
    console.log(a,b,c)
}
printArray([20,10,2000])


function showDateTime()
{
    var date = new Date()
    var day = (date.getDay())
    var month = (date.getMonth())
    var year = (date.getFullYear())
    var minute = (date.getMinutes())
    var hour = (date.getHours())

    console.log(`${day}/${month}/${year}    ${minute}:${hour}`)
}
showDateTime()


function swapDate(x,y)
{
    let z=x;
    x=y;
    y=z;
}
console.log(swapDate(3,4))


function reverseData([a,b,c])
{
    let x = [a,b,c].reverse()
    console.log(x)
}
reverseData([10,20,30])


// function upperCase([a,b,c])
// {
//     let x = [a,b,c].toUpperCase()
//     console.log(x)
// }
// upperCase(['harsh','hardik','rajesh'])


const arr = ['a','b','c','d']
function addArray(x)
{
    arr.push(x)
    console.log(arr)
}
addArray('e')


const arr1 = ['a','b','c','d']
function removeArray()
{
    arr1.pop()
    console.log(arr1)
}
removeArray()


function sum(...args)
{
    let sum = 0
    for(let num of args){
        sum += num
    }
    return sum
}
console.log(sum(1,2,3))


function odd(...args)
{
    let sum = 0
    for(let num of args){
        if(num%2==0)
        {
            sum += num
        }
    }
    return sum
}
console.log(odd(1,2,3,4,5,6,7,8))


function even(...args)
{
    let sum = 0
    for(let x of args){
        if(x%2!==0){
            sum += x
        }
    }
    return sum
}
console.log(even(1,2,3,4,5,6,7,8))



function rgb()
{
        let x = Math.floor(Math.random()*256);
        let y = Math.floor(Math.random()*256);
        let z = Math.floor(Math.random()*256);
        console.log(`rgb color:`+x, y, z) 
}
rgb()




function shuffle1([a,b,c,d,e,f])
{
    //shuffle(a,b,c,d,e,f)
    console.log(a,b,c,d,e,f)
}
shuffle1([1,2,3,4,5,6])