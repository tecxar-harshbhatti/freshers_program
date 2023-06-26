localStorage.setItem('firstname','harsh')
console.log(localStorage);

const user = {
    firstname: 'hardik',
    age: 20,
    skills: ['html','css','js','react']
}

const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('usertest', userText) 
console.log(userText);

let skills = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)