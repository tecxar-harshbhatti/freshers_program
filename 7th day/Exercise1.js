function Name()
{
    let fname = 'harsh'
    let lname = 'bhatti'
    let fullname = fname +' '+ lname
    console.log(fullname)
}
Name()

function name1(fname, lname)
{
    let fullname = fname +' '+lname
    console.log(fullname)
}
name1('harsh','bhatti')


function add(n1,n2)
{
    const sum = n1+n2
    console.log(sum)
}
add(10,8)


function rectengle()
{
    let length = 10
    let width = 8
    let area = length * width
    console.log(`Area of rectengle:`+area)
}
rectengle()


function rectengle1(length,width)
{
    let area = (2*(length+width))
    console.log(area)
}
rectengle1(10,8)


function rectprism()
{
    let height = 21
    let width = 18
    let length = 3
    let volume = (height*width*length)
    console.log(volume)
}
rectprism()


function circle(redius)
{
    let pi = 3.14
    let area = (2*pi*redius)
    console.log(`area of circle:`+area)
}
circle(8)


function substance()
{
    let mass = 23
    let volume = 14
    let density = (mass/volume)
    console.log(`Density of substance:`+density)
}
substance()


function calcSpeed()
{
    let distance = 100
    let time = 15
    let speed = (distance/time)
    console.log(`Your speed is:`+speed+`per minutes`) 
}
calcSpeed()


function weight()
{
    let mass = 2.33
    let gravity = 27
    let weight = (mass*gravity)
    console.log(`Weight is:`+weight)
}
weight()


function temprature()
{
    let celcius = 34
    let fehrenhit = ((celcius* 9/5)+32)
    console.log(`Temprature in fehrenhit is:`+fehrenhit)
}
temprature()


function checkseason(month)
{
    if(month=='january' || month=='february')
    {
        console.log('Autumn')
    }
    else if(month=='march' || month=='april')
    {
        console.log('winter')
    }
    else if(month=='may' || month=='jun')
    {
        console.log('spring')
    }
    else
    {
        console.log('summer')
    }
}
checkseason('february')


function findMax()
{
    let max = Math.max(12,20,30)
    console.log(max)
}
findMax()