console.log('%d %s %d ok tested',2010, 'harsh', 2000);

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript',
  'color:red',
  '',
  'color:green',
  '',
  'color:blue'
)

console.warn('Warning is different from error')

console.error('This is an error message')

const names = ['harsh', 'hardik', 'rajesh']
console.log(names)

const users = {
    name:'harsh',
    lname: 'bhatti',
    age: 23,
    no: 7435090755
}

console.table(users)

const countries = [
    ['Finland', 'Helsinki', 20],
    ['Sweden', 'Stockholm', 10],
    ['Norway', 'Oslo', 2000]
  ]

  console.table(countries)


  const user = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]

  console.table(user)


console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1], countries[i][2])
}
console.timeEnd('Regular for loop')



console.time('for of loop')
for (const [, city,countryCode] of countries) {
  console.log(city,countryCode)
}
console.timeEnd('for of loop')


console.info('30 Days Of fullStack challenge might be released')
console.log('30 Days Of fullStack challenge might be released');


console.assert(4 > 3, '4 is greater than 3')
console.assert(4 < 3, '4 is not greater than 3') 



for (let i = 0; i <= 10; i += 1) {
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
  }


console.group('Names')
console.log(names)
console.groupEnd()


console.group('Countries')
console.log(countries)