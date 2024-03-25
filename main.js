//Esercizio 1


let paragraphs = document.querySelectorAll("p");
let hideP = document.querySelector(".hidep");
let bold = document.querySelector(".bold-text");



hideP.addEventListener('click', () => {

    paragraphs.forEach((paragraph) => {
        paragraph.classList.toggle('d-none')
    });

});


let changeColor = document.querySelector(".changeColor");

changeColor.addEventListener('click', () => {

    paragraphs.forEach((paragraph) => {
        let red = Math.floor(Math.random() * (255 - 0 + 1));
        let blue = Math.floor(Math.random() * (255 - 0 + 1));
        let green = Math.floor(Math.random() * (255 - 0 + 1));
        paragraph.style.color = `rgb(${red}, ${blue}, ${green})`
    })

});



bold.addEventListener('click', () => {

    paragraphs.forEach((paragraph) => {
        paragraph.classList.toggle('fw-bold')
    });

});




//esercizio 2 


let StudentsWrapper = document.querySelector('#StudentsWrapper');

const students = [
    {name: 'Ciccio', surname: 'Palo', age: '15'},
    {name: 'Ciccio', surname: 'Palo', age: '21'},
    {name: 'Ciccio', surname: 'Palo', age: '23'},
    {name: 'Ciccio', surname: 'Palo', age: '34'},
    {name: 'Ciccio', surname: 'Palo', age: '15'},
    {name: 'Ciccio', surname: 'Palo', age: '15'},
    {name: 'Ciccio', surname: 'Palo', age: '15'},
];



students.forEach(student =>{
    let div = document.createElement('div');

    div.classList.add('col-12', 'col-md-3', 'd-flex', 'justify-content-center', 'text-center', 'custom-card')
    div.innerHTML = `
                <div class="card-custom">
                    <p>Nome: ${student.name}</p>
                    <p>Cognome: ${student.surname}</p>
                    <p>Eta': ${student.age}</p>
                </div>
    
    `
    StudentsWrapper.appendChild(div);
})