const validationForm = (event) => {
    //alert('Estoy validando el formulario');
    event.preventDefault();
   
    const firtsname = document.querySelector('#firstname');
    const lastname = document.querySelector('#lastname');
    const email = document.querySelector('#email');
    const affair = document.querySelector('#affair');
    const message = document.querySelector('#message');

    let validation = true;
   
    if(firtsname.value === ''){
        firtsname.classList.add('error');
        const divError = document.querySelector('#error-firstname');
        divError.textContent='Debes completar el campo nombre';
        validation = false;
    }
    if(lastname.value === ''){
        lastname.classList.add('error');
        const divError = document.querySelector('#error-lastname');
        divError.textContent='Debes completar el campo apellido';
        validation= false;
    }
    if(email.value === ''){
        email.classList.add('error');
        const divError = document.querySelector('#error-email');
        divError.textContent='Debes completar el campo email';
        validation = false;
    }
    if(affair.value === ''){
        affair.classList.add('error');
        const divError = document.querySelector('#error-affair');
        divError.textContent='Debes completar el campo asunto';
        validation = false;
    }
    if(message.value === ''){
        message.classList.add('error');
        const divError = document.querySelector('#error-message');
        divError.textContent='Debes completar el campo mensaje';
        validation = false;
    }

     if(validation){
         formRegister.submit();
     }
}

formRegister.addEventListener('submit',validationForm);

