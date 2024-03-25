//Esercizio 1


let paragraphs = document.querySelectorAll("p");
let hideP = document.querySelector(".hidep");
let bold = document.querySelector(".bold-text")



hideP.addEventListener('click', () => {

    paragraphs.forEach((paragraph) => {
        paragraph.classList.toggle('d-none')
    });

})


let changeColor = document.querySelector(".changeColor");

changeColor.addEventListener('click', () => {

    paragraphs.forEach((paragraph) => {
        let red = Math.floor(Math.random() * (255 - 0 + 1));
        let blue = Math.floor(Math.random() * (255 - 0 + 1));
        let green = Math.floor(Math.random() * (255 - 0 + 1));
        paragraph.style.color = `rgb(${red}, ${blue}, ${green})`
    })

})



bold.addEventListener('click', () => {

    paragraphs.forEach((paragraph) => {
        paragraph.classList.toggle('fw-bold')
    });

})


