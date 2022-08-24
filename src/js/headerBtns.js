const homeBtn = document.querySelector('button[data-action="toHome"]');
const libBtn = document.querySelector('button[data-action="toLibrary"]');
const iconBtn = document.querySelector('.icon-button');

iconBtn.addEventListener('click', () =>{
    window.location.href = '/index.html'
})

homeBtn.addEventListener('click', () => {
    window.location.href = '/index.html'
})

libBtn.addEventListener('click', () => {
    window.location.href = '/library.html' 
})

