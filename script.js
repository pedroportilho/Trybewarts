// Declaração de elementos presentes no HTML
const emailInput = document.getElementById('email');
const password = document.getElementById('password');
const novaResposta = document.getElementById('form-data');
const form = document.getElementById('evaluation-form');
const entrar = document.getElementById('entrar');
const textarea = document.getElementsByClassName('textarea')[0];
const agreement = document.getElementById('agreement');
const enviarButton = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
let contador = 500;

// Declaração e configuração de novos elementos
const nomeLabel = document.createElement('label');
novaResposta.appendChild(nomeLabel);
const emailLabel = document.createElement('label');
novaResposta.appendChild(emailLabel);
const casaLabel = document.createElement('label');
novaResposta.appendChild(casaLabel);
const familiaLabel = document.createElement('label');
novaResposta.appendChild(familiaLabel);
const materiasLabel = document.createElement('label');
novaResposta.appendChild(materiasLabel);
const avaliacaoLabel = document.createElement('label');
novaResposta.appendChild(avaliacaoLabel);
const observacoesLabel = document.createElement('label');
novaResposta.appendChild(observacoesLabel);

// variaveis para receber os valores selecionados
let familiaSelected;
let materiaSelected = '';
let avaliacaoSelected;

function validar() {
  if (emailInput.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function limpar() {
  textarea.innerText = '';
}

function disable() {
  enviarButton.disabled = !this.checked;
}

function contagem() {
  contador = 500 - textarea.value.length;
  counter.innerHTML = contador;
  textarea.setAttribute('id', 'textarea');
}

function gettingFamilia() {
  for (let i = 4; i <= 6; i += 1) {
    if (form.elements[i].checked) {
      familiaSelected = form.elements[i].value;
    }
  }
}

function achandoMaterias(index) {
  if (form.elements[index].checked) {
    if (materiaSelected === '') {
      materiaSelected = form.elements[index].value;
    } else {
      materiaSelected = `${materiaSelected}, ${form.elements[index].value}`;
    }
  }
}

function gettingMaterias() {
  for (let i = 7; i <= 12; i += 1) {
    achandoMaterias(i);
  }
}

function gettingAvaliacao() {
  for (let i = 13; i <= 22; i += 1) {
    if (form.elements[i].checked) {
      avaliacaoSelected = form.elements[i].value;
    }
  }
}

function gettingSelected() {
  gettingFamilia();
  gettingMaterias();
  gettingAvaliacao();
}

function respostas() {
  gettingSelected();

  form.style.visibility = 'hidden';
  novaResposta.style.display = 'block';

  nomeLabel.innerHTML = `Nome: ${form.elements[0].value} ${form.elements[1].value} <br>`;
  emailLabel.innerHTML = `Email: ${form.elements[2].value} <br>`;
  casaLabel.innerHTML = `Casa: ${form.elements[3].value} <br>`;
  familiaLabel.innerHTML = `Família: ${familiaSelected} <br>`;
  materiasLabel.innerHTML = `Matérias: ${materiaSelected} <br>`;
  avaliacaoLabel.innerHTML = `Avaliação: ${avaliacaoSelected} <br>`;
  observacoesLabel.innerHTML = `Observações: ${form.elements[23].value}`;
}

enviarButton.addEventListener('click', respostas);
textarea.oninput = contagem;
enviarButton.disabled = !agreement.checked;
agreement.onchange = disable;
textarea.addEventListener('click', limpar);
entrar.addEventListener('click', validar);
