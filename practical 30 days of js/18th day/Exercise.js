const url = 'https://restcountries.com/v2/all'
// const countries = async ()=> {
//    try{
//     const response = await fetch(url)
//     const data = await response.json()

//     data.forEach(country => {
//         const name = country.name;
//         const capital = country.capital;
//         const languages = country.languages;
//         const population = country.population;
//         const area = country.area;

//         // console.log(`country: ${name}`);
//         // console.log(`capital: ${capital}`);
//         // console.log(`language: ${languages}`);
//         // console.log(`population: ${population}`);
//         // console.log(`area: ${area}`);
//         console.log(`country: ${name} => capital: ${capital} => language: ${languages} => population:${population} => area:${area}`);
//     });
//    }catch(err) {
//     console.error(err);
//    }
// }
// countries()



// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(country => {
//             const name = country.name;
//             const capital = country.capital;
//             const languages = country.languages.map(language => language.name).join(', ');
//             const population = country.population;
//             const area = country.area;

//             console.log(`country: ${name} => capital: ${capital} => language: ${languages} => population:${population} => area:${area}`);
//         })
//     })
// .catch(error =>console.log(error))


const url1 =  'https://api.thecatapi.com/v1/breeds'
// const cates = async() => {
//     try{
//         const response = await fetch(url1)
//         const data = await response.json()
//         console.log(data);
//         data.forEach(cat => {
//             const name = cat.name;
//             const weight = cat.weight.imperial;
//             console.log(`name: ${name}`)
//             console.log(`weight: ${weight}`);
//         })
//     }catch(err){
//         console.log(err);
//     }
// }
// cates()


fetch(url1)
    .then(response => response.json())
    .then(data1 => {
        data1.forEach(cats => {
            const name = cats.name;
            const weight = cats.weight.metric;
            const avg = weight

            console.log(`name: ${name}`)
            console.log(`weight: ${weight}`);
            console.log(avg);
        })
    })
.catch(error =>console.log(error))
