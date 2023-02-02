import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
let formData = {}
const refs = {
    form: document.querySelector('.feedback-form'),
    }
 
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
        
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}
 

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}


if(localStorage.getItem(STORAGE_KEY)){
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    
    for(let key in formData){
        refs.form.elements[key].value = formData[key];
    }
}

