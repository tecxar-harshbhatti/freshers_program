// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
  
//   const setOfLanguages = new Set(languages)
//   console.log(setOfLanguages)

// const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
// setOfCompanies = new Set()
// for (const company of companies) 
// {
//   setOfCompanies.add(company)
// }
// console.log(setOfCompanies)

// console.log(setOfCompanies.size)
// console.log(setOfCompanies.delete('Google'))
// console.log(setOfCompanies.has('Amazon'))



// const A = [1,2,3,4,5,6]
// const B = [5,6,7,8,9,10]
// // const C = [...A, ...B]
// // console.log(C)

// const a = new Set(A)
// const b = new Set(B)
// const c = new Set(C)
// console.log(c)




// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)

// console.log(C)




countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  //console.log(map.size)


  for (const country of countries) {
    console.log(country)}


    for (const [country, city] of countries){
        console.log(country, city)
       }