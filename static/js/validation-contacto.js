 const validationForm = (event) => {
      event.preventDefault();
    
      const firtsname = document.querySelector('#firstname');
      const lastname = document.querySelector('#lastname');

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

      if(validation){
          formRegister.submit();
      }
 }

 formRegister.addEventListener('submit',validationForm);

