const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", ()=>{
    navMenu.classList.remove("show");
}));



// Modal
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

// modal2
const modal2 = document.querySelector('#modal2');
const openModal2 = document.querySelector('#open-button2');
const closeModal2 = document.querySelector('#close-button2');

// modal
const modal3 = document.querySelector('#modal3');
const openModal3 = document.querySelector('#open-button3');
const closeModal3 = document.querySelector('#close-button3');

// modal4
const modal4 = document.querySelector('#modal4');
const openModal4 = document.querySelector('#open-button4');
const closeModal4 = document.querySelector('#close-button4');


// modal1
openModal.addEventListener('click', ()=>{
    modal.showModal()
});

closeModal.addEventListener('click', ()=>{
    modal.close()
});

// modal2
openModal2.addEventListener('click', ()=>{
    modal2.showModal()
});

closeModal2.addEventListener('click', ()=>{
    modal2.close()
});

// modal3
openModal3.addEventListener('click', ()=>{
    modal3.showModal()
});

closeModal3.addEventListener('click', ()=>{
    modal3.close()
});

// modal
openModal4.addEventListener('click', ()=>{
    modal4.showModal()
});

closeModal4.addEventListener('click', ()=>{
    modal4.close()
});


// Prices Package
fetch("packages.json")

.then(function(response){
    return response.json()
})

.then(function(packages){
    // let section = document.querySelector("#prices");
    // let mainContainer = document.querySelector("#pricesMainContainer");
    let modal = document.querySelector("#modal");

    let modalBox = "";
    for(let package of packages){
        modalBox =+`
        <h2 class"modal__h2">${package.name}</h2>
        <li>${package.Price}</li>
        `;
    } 

    modal.innerHTML = modalBox;
})
