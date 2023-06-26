// class Person
// {
//     constructor(firstname,lastname)
//     {
//         console.log(this)
//         this.firstname = firstname
//         this.lastname = lastname
//     }
// }

// const person  = new Person('harsh','bhatti')
// const person2  = new Person('hardik','bhatti')
// console.log(person)
// console.log(person2)

class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  person1.setScore = 1
  person1.setSkill = 'HTML'
  person1.setSkill = 'CSS'
  person1.setSkill = 'JavaScript'
  
  person2.setScore = 1
  person2.setSkill = 'Planning'
  person2.setSkill = 'Managing'
  person2.setSkill = 'Organizing'
  
  console.log(person1.score)
  console.log(person2.score)
  
  console.log(person1.skills)
  console.log(person2.skills)
 



  class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }
  }
  
  const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
  console.log(s1)
  console.log(s1.saySomething())
//   console.log(s1.getFullName())
//   console.log(s1.getPersonInfo())

  class animals{
    constructor(name,age,color,legs){
        this.name = name
        this.age = age;
        this.color = color;
        this.legs = legs;
        // this.breed = breed;
    
    }
    get Animals(){
        return this.name
    }
    get getAge(){
        return this.age
    }
    set setAge(age){
        this.age += age
    }
  }

  const animals1 = new animals('Dog',8,'Brown',4)
  console.log(animals1.Animals)
  console.log(animals1.getAge)



  class animal extends Person{
    saySomething(){
        console.log("i am inheritig property")
    }
  }
 

  const animals2 = new animal('Dog',8,'Brown',4)
  console.log(animals2)
  console.log(animals2.saySomething())