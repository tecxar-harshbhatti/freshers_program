const slides = document.querySelectorAll(".slide ");

var counter = 0;
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
}
 )

const goPrevise = () =>{
    counter--;
    slideImg();
}
const goNext = () => {
    counter++;
    slideImg();
}

const slideImg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    }
)
}

const words = ["React", "javaScript", "HTML", "CSS"];
let currentIndex = 0;
const outputDiv = document.getElementById("output");    //for taking id from html

function generateNewWord() {
  const currentWord = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
  outputDiv.textContent = currentWord;      // for display output in display
  setTimeout(generateNewWord, 2000);
}
generateNewWord()