const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web developer",
        img: "1 (1).jpg",
        text: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,"
    },
    {
        id: 2,
        name: "Rashel Mahomud",
        job: "Web Desiger",
        img: "1 (2).jpg",
        text: " 2 A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,"
    },
    {
        id: 3,
        name: "Ayub Khan",
        job: "Web developer",
        img: "1 (3).jpg",
        text: "3 A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,"
    }

]


const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const random = document.querySelector('.random-btn');


let topPerson = 0;

window.addEventListener("DOMContentLoaded", function () {

    showPerson();

})

function showPerson() {
    const items = reviews[topPerson];

    img.src = items.img;
    author.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.text;
}

nextBtn.addEventListener('click', function () {

    topPerson++;

    if (topPerson > reviews.length - 1) {
        topPerson = 0;
    }

    showPerson();
});


prevBtn.addEventListener('click', function () {

    topPerson--;

    if (topPerson < 0) {

        topPerson = reviews.length - 1;
    }

    showPerson();
})

random.addEventListener('click', function () {

    topPerson = Math.floor(Math.random() * reviews.length);
    showPerson();
})