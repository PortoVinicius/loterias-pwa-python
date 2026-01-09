// =========================
// Service Worker & PWA
// =========================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

const installBtn = document.getElementById('btn-install');
if (installBtn) {
  installBtn.style.display = 'none';
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBtn) installBtn.style.display = 'block';
});

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) {
      alert('App não disponível para instalação no momento.');
      return;
    }
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    console.log(`Resultado da instalação: ${choice.outcome}`);
    deferredPrompt = null;
    installBtn.style.display = 'none';
  });
}

// =========================
// Função auxiliar: mostrar números como "bolas"
// =========================
function mostrarNumeros(resultadoDiv, numeros) {
  resultadoDiv.innerHTML = ''; // limpa resultado anterior
  numeros.forEach(n => {
    const span = document.createElement('span');
    span.textContent = n;
    span.className = 'numero-bola';
    resultadoDiv.appendChild(span);
  });
}

// =========================
// Funções de gerar números
// =========================
function gerarMegaSena() {
  const numeros = [];
  while (numeros.length < 6) {
    const n = Math.floor(Math.random() * 60) + 1;
    if (!numeros.includes(n)) numeros.push(n);
  }
  return numeros.sort((a,b) => a-b);
}

function gerarLotomania() {
  const numeros = [];
  while (numeros.length < 50) {
    const n = Math.floor(Math.random() * 100);
    if (!numeros.includes(n)) numeros.push(n);
  }
  return numeros.sort((a,b) => a-b);
}

function gerarQuina() {
  const numeros = [];
  while (numeros.length < 5) {
    const n = Math.floor(Math.random() * 80) + 1;
    if (!numeros.includes(n)) numeros.push(n);
  }
  return numeros.sort((a,b) => a-b);
}

function gerarLotofacil() {
  const numeros = [];
  while (numeros.length < 15) {
    const n = Math.floor(Math.random() * 25) + 1;
    if (!numeros.includes(n)) numeros.push(n);
  }
  return numeros.sort((a,b) => a-b);
}

function gerarDuplaSena() {
  const numeros = [];
  while (numeros.length < 6) {
    const n = Math.floor(Math.random() * 60) + 1;
    if (!numeros.includes(n)) numeros.push(n);
  }
  return numeros.sort((a,b) => a-b);
}

function gerarFederal() {
  return [String(Math.floor(Math.random() * 100000)).padStart(5, '0')];
}


const times = [
  "Flamengo", "Palmeiras", "Corinthians", "São Paulo",
  "Vasco", "Grêmio", "Internacional", "Cruzeiro",
  "Santos", "Botafogo", "Atlético-MG", "Bahia",
  "Fluminense", "Sport", "Atlético-PR", "Coritiba",
  "Vitória", "Ceará", "Fortaleza", "Goiás"
];

function gerarTimemania() {
  const numeros = [];
  while (numeros.length < 7) {
    const n = Math.floor(Math.random() * 80) + 1;
    if (!numeros.includes(n)) numeros.push(n);
  }
  numeros.sort((a,b) => a-b);
  const timeDoCoracao = times[Math.floor(Math.random() * times.length)];
  return { numeros, timeDoCoracao };
}

// =========================
// Eventos dos botões
// =========================
function registrarBotao(idBotao, idResultado, gerarFunc, isTimemania=false) {
  const btn = document.getElementById(idBotao);
  if (!btn) return;

  btn.addEventListener('click', () => {
    const resultadoDiv = document.getElementById(idResultado);
    if (isTimemania) {
      resultadoDiv.innerHTML = ''; // limpa
      const { numeros, timeDoCoracao } = gerarFunc();
      mostrarNumeros(resultadoDiv, numeros);
      // adiciona time do coração separado
      const spanTime = document.createElement('span');
      spanTime.textContent = `Time do Coração: ${timeDoCoracao}`;
      spanTime.style.display = 'block';
      spanTime.style.marginTop = '10px';
      spanTime.style.fontWeight = 'bold';
      resultadoDiv.appendChild(spanTime);
    } else {
      mostrarNumeros(resultadoDiv, gerarFunc());
    }
  });
}

// Mega-Sena
registrarBotao('btn-gerar', 'resultado', gerarMegaSena);
// Lotomania
registrarBotao('btn-gerar-lotomania', 'resultado-lotomania', gerarLotomania);
// Quina
registrarBotao('btn-gerar-quina', 'resultado-quina', gerarQuina);
// Lotofácil
registrarBotao('btn-gerar-lotofacil', 'resultado-lotofacil', gerarLotofacil);
// Dupla Sena
registrarBotao('btn-gerar-dupla1', 'resultado-dupla1', gerarDuplaSena);
registrarBotao('btn-gerar-dupla2', 'resultado-dupla2', gerarDuplaSena);
// Federal
registrarBotao('btn-gerar-federal', 'resultado-federal', gerarFederal);
// Timemania
registrarBotao('btn-gerar-timemania', 'resultado-timemania', gerarTimemania, true);
