const firstName = document.querySelector('#FirstName');
const lastName = document.querySelector('#LastName');
const emailAddress = document.querySelector('#EmailAddress');
const password = document.querySelector('#Password');

const firstNameAlert = document.querySelector('#FirstNameAlert');
const lasttNameAlert = document.querySelector('#LastNameAlert');
const emailAddressAlert = document.querySelector('#EmailAddressAlert');
const passwordAlert = document.querySelector('#PasswordAlert');

const button = document.querySelector('.container__content__date__botton');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmty(firstName.value, firstName, firstNameAlert);
    validateEmty(lastName.value, lastName, lasttNameAlert);
    validateEmail(emailAddress.value, emailAddress, emailAddressAlert);
    validatePassword(password.value, password, passwordAlert);
});

function validatePassword(valueInput, borderInput, divAlert){
    let regPas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if(regPas.test(valueInput) == true){
        hideAlert(borderInput, divAlert);
    }else{
        showAlert(borderInput, divAlert);
    }

}

function validateEmail(valueInput,borderInput,divAlert){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(valueInput) == true){
        hideAlert(borderInput, divAlert);
    }else{
        showAlert(borderInput, divAlert);
    }
}

function validateEmty(valueInput, borderInput, divAlert){
    if(valueInput.length == 0){
        showAlert(borderInput, divAlert);
    } else{
        hideAlert(borderInput,divAlert);
    }
}

function showAlert(borderInput, divAlert){
    borderInput.style.border = '1px solid red';
    divAlert.style.display = 'block';
    borderInput.style.backgroundImage = 'url("./images/icon-error.svg")';
}
function hideAlert(borderInput, divAlert){
    borderInput.style.border = '1px solid  hsl(246, 25%, 77%)';
    divAlert.style.display = 'none';
    borderInput.style.backgroundImage = '';

}