const dosomething = callback => {
    setTimeout(()=> {
        const skills = ['html','css','js','react']
        callback('It is awsome', skills)
    },2000)
}

const callback = (err, result) => {
    if(err){
        return console.log(err)
    }
    return console.log(result);
}

dosomething(callback)   // It is awsome



const dosomethingAgain = callback => {
    setTimeout(()=>{
        const skill = ['a','b','c']
        callback(false,skill)
    },3000)
}

const callback1 = (err,result) => {
    if(err){
        return console.log(err)
    }
    return console.log(result)
}

dosomethingAgain(callback1) // (3) ['a', 'b', 'c']


const doPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const skill = ['x','y','z']
        if (skill.length > 0){
            resolve(skill)
        }
        else
        {
            reject('something is wrong happen')
        }
    }, 4000)
})

doPromise.then(result=>{
    console.log(result)
}).catch(error => console.log(error))


const square = async function (n) {
    return n * n
  }
//   const value = await square(2)
//   console.log(value)
console.log(square(2));  



const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response=>response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))   // console contry data from link


    
const fetchData = async() => {
    try{
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries);
    }catch(err){
        console.log(err)
    }
}
console.log('===== async and await')
fetchData()     // console contry data from link
