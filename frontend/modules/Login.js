import validator from 'validator';

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');

    // Limpa erros anteriores
    el.querySelectorAll('.campo-erro').forEach(msg => msg.remove());
    el.querySelectorAll('.campo-input').forEach(input => {
      input.style.borderColor = '';
      input.style.boxShadow = '';
    });

    let error = false;

    if (!validator.isEmail(emailInput.value)) {
      this.showError(emailInput, 'Digite um e-mail válido.');
      error = true;
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      this.showError(passwordInput, 'A senha deve ter entre 3 e 50 caracteres.');
      error = true;
    }

    if (!error) el.submit();
  }

  showError(input, message) {
    input.style.borderColor = '#e05252';
    input.style.boxShadow = '0 0 0 3px rgba(224,82,82,0.12)';

    const span = document.createElement('span');
    span.className = 'campo-erro';
    span.style.cssText = 'display:block; font-size:0.78rem; color:#e05252; margin-top:0.3rem;';
    span.innerText = '⚠ ' + message;

    input.insertAdjacentElement('afterend', span);
  }
}