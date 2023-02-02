import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";

const formData = {}

const refs = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
}
 populateForm()

refs.form.addEventListener('submit', onFormSubmit);
//refs.message.addEventListener('input', throttle(onFormInput, 500))
 
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    console.log(formData)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})
    //console.log(formData);

    function onFormSubmit(evt){
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}

function populateForm() {

const saveFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));



if(saveFormData){
    console.log(saveFormData)

//     refs.mail.value = saveFormData.email;
// }
//         else if(saveFormData.message){
//         refs.message.value = saveFormData.message;
    };
    
}



