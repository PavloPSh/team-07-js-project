import Notiflix from "notiflix";



const searchForm = document.querySelector('#search-form');
let inputData = '';


searchForm.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    if(event.currentTarget.elements.searchData.value === ''){
        return Notiflix.Notify.warning('try to find something')
    }

    inputData = event.currentTarget.elements.searchData.value;

    
    console.log(inputData)
    

}

