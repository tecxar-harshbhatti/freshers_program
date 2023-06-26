for(let i=0; i<=5; i++)
{
    console.log(i)
}

for(let i = 5; i >= 0; i--){
    console.log(i)
  }

for(let i=0; i<=5; i++)
{
    console.log(`${i} * ${i} = ${i*i}`)
}



const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newarr = []
for(let i=0; i<countries.length; i++)
{
    newarr.push(countries[i].toUpperCase())
}

console.log(newarr)



// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for(let i=0; i<numbers.length; i++)
// {
//     sum += numbers[i]
// }
// console.log(sum)




// let i=0
// while(i<=5)
// {
//     console.log(i)
//     i++
// }

// let i=0
// do{
//     console.log(i)
//     i++
// }while(i<=5)



// const numbers = [0,1, 2, 3, 4, 5]

// for (const num of numbers)
// {
//     console.log(num)
// }




const number = [1,2,3,4,5,6,7,8,9,10]

// for(let i=1; i<=10; i++)
// {
//     console.log(i)
// }




// let i=1
// while(i<=10)
// {
//     console.log(i)
//     i++
// }


// let i=1
// do{
//     console.log(i)
//     i++
// }while(i<=10)


// for(let i=10;i>=1; i--)
// {
//     console.log(i)
// }

// let i=10
// while(i>=1)
// {
//     console.log(i)
//     i--
// }

// let i=10
// do{
//     console.log(i)
//     i--
// }while(i>=1)


// let num = 7
// let str = ''
// for(let i=1; i<=num; i++)
// {
//     for(let j=0; j<i; j++)
//     {
//         str += '*';
//     }
//     str += '\n';
// }

// console.log(str)

// let num1 = 10
// for(let i=0; i<=10; i++)
// {
//     console.log(`${i} * ${i} = ${i * i}`)
// }



// for(let i=0; i<=100; i++)
// {
//     if(i%2==0){
//          console.log(i)
//     }
// }




// for(let i=0; i<=100; i++)
// {
//     if(i%2!==0){
//         console.log(i)
//     }
// }


// let sum =0
// for(let i=0; i<=100; i++)
// {
//     sum += i
// }
// console.log(sum)



// let sum =0
// for(let i=0; i<=100; i++)
// {
//     if(i%2==0){
//         sum += i
//         // console.log(i)
//     }
// }

// console.log(sum)



// let sum = 0
// for(let i=0; i<=100; i++)
// {
//     if(i%2!==0)
//     {
//         sum += i
//     }
// }

// console.log(sum)


// function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }

// console.log(makeid(10));





function generateRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return [red, green, blue];
  }
  
  function formatColor(color) {
    var red = color[0];
    var green = color[1];
    var blue = color[2];
    return "RGB(" + red + ", " + green + ", " + blue + ")";
  }
  
  var randomColor = generateRandomColor();
  var formattedColor = formatColor(randomColor);
  
  console.log("Random RGB color:", formattedColor);



  
function printFullName(firstName, lastName) {
    // return `${firstName} ${lastName}`
    return firstName +" "+ lastName
  }
  console.log(printFullName('Asabeneh', 'Yetayeh'))

