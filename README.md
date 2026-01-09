# Loterias PWA com Python

Aplicação web PWA para geração de jogos de loteria, desenvolvida com **JavaScript**.  
Estrutura organizada para fácil manutenção e expansão.

---

## 🗂 Estrutura do projeto

```bash
loterias-pwa-python/
├── index.html
├── megasena.html    
├── dupla_sena.html 
├── federal.html   
├── lotofacil.html 
├── lotomania.html 
├── megasena.html 
├── quina.html 
├── manifest.json
├── service-worker.js
├── css/
│   └── style.css
├── js/
│   └── main.js
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```


---

## 🚀 Funcionalidades

- Página inicial com navegação entre loterias
- Páginas individuais para:
  - Lotofácil
  - Mega-Sena
  - Quina, entre outros
- Geração de números aleatórios
- Instalável mobile

---

## ⚙️ Como executar

1. Abra o terminal/Prompt de Comando
```bash
git clone https://github.com/PortoVinicius/loterias-pwa-python.git
cd loterias-pwa-python

```
2. Usando python
```bash
# Para Python 3
python3 -m http.server 8000
```