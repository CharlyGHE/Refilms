document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let valid = true;
  
      // Clear previous errors
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  
      // Name validation
      const name = document.getElementById('name');
      if (name.value.trim() === '') {
        valid = false;
        document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
      }
  
      // Surname validation
      const surname = document.getElementById('surname');
      if (surname.value.trim() === '') {
        valid = false;
        document.getElementById('surnameError').textContent = 'El apellido es obligatorio.';
      }
  
      // Email validation
      const email = document.getElementById('email');
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email.value.trim())) {
        valid = false;
        document.getElementById('emailError').textContent = 'Por favor, introduce un email válido.';
      }
  
      // Subject validation
      const subject = document.getElementById('subject');
      if (subject.value === '') {
        valid = false;
        document.getElementById('subjectError').textContent = 'Selecciona un asunto.';
      }
  
      // Message validation
      const message = document.getElementById('message');
      if (message.value.trim() === '') {
        valid = false;
        document.getElementById('messageError').textContent = 'El mensaje es obligatorio.';
      }
  
      // Terms and conditions validation
      const terms = document.getElementById('terms');
      if (!terms.checked) {
        valid = false;
        document.getElementById('termsError').textContent = 'Debes aceptar los términos y condiciones.';
      }
  
      if (valid) {
        form.submit();
      }
    });
  });
  