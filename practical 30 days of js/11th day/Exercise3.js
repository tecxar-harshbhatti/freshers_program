const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]


function convertArrayToObject(array)
{
    const result = array.map(([name,skills,score]) => ({name,skills,score}))
    return result
}

const converteAray = convertArrayToObject(students)
console.log(converteAray)




const student1 = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
for(const[name,skills,scores,reactScore] of student1)
{
    console.log(name,skills,scores,reactScore)
}



const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }


  const newStudent = {...student}
  console.log(newStudent)


  const add = {...student, skills:{...student.skills, frontEnd:[...student.skills.frontEnd,{skill:'Bootstrap',leve:8}]}}
  console.log(add)
