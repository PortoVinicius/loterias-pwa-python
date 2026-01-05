function gerarLotofacil() {
    gerarNumeros(15, 25);
}

function gerarMegaSena() {
    gerarNumeros(6, 60);
}

function gerarQuina() {
    gerarNumeros(5, 80);
}

function gerarLotomania() {
    gerarNumeros(50, 100); // 0 a 99
}

function gerarDuplaSena() {
    gerarNumeros(6, 50); // 6 números de 1 a 50
}

function gerarTimemania() {
    gerarNumeros(7, 80); // 7 números de 1 a 80
    const times = ["Flamengo", "Corinthians", "Palmeiras", "Vasco", "São Paulo", "Grêmio", "Internacional", "Cruzeiro", "Botafogo", "Santos"];
    const timeSorteado = times[Math.floor(Math.random() * times.length)];
    document.getElementById("time-do-coracao").textContent = "Time do Coração: " + timeSorteado;
}

function gerarFederal() {
    const numero = Math.floor(Math.random() * 100000) + 1;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Bilhete: ${numero.toString().padStart(5, "0")}</li>`;
}

/* Função comum para gerar números */
function gerarNumeros(qtd, max) {
    const numeros = new Set();
    while (numeros.size < qtd) {
        numeros.add(Math.floor(Math.random() * max) + 1);
    }
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    [...numeros].sort((a,b)=>a-b).forEach(n => {
        const li = document.createElement("li");
        li.textContent = n;
        resultado.appendChild(li);
    });
}
