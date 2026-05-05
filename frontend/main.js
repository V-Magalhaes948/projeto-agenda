import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Contact from './modules/Contact';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contact = new Contact('.form-contact');

login.init();
cadastro.init();
contact.init();


import './assets/css/style.css';

// Efeito de fade para o final da tabela //
document.addEventListener('DOMContentLoaded', () => {
  const body = document.getElementById('tabelaScrollBody');
  const fade = document.getElementById('tabelaFade');
  if (!body || !fade) return;

  function atualizarFade() {
    const chegouNoFim = body.scrollTop + body.clientHeight >= body.scrollHeight - 4;
    fade.style.opacity = chegouNoFim ? '0' : '1';
  }

  if (body.scrollHeight <= body.clientHeight) {
    fade.style.opacity = '0';
  }

  body.addEventListener('scroll', atualizarFade);
  atualizarFade();
});