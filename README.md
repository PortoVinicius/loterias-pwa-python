# Loterias PWA com Python

Aplicação web PWA para geração de jogos de loteria, desenvolvida com **Flask**, **Jinja** e **JavaScript**.  
Estrutura organizada para fácil manutenção e expansão, seguindo estilo CS50.

---

## 🗂 Estrutura do projeto

```bash
loterias-pwa-python/
├── frontend/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   ├── app.js
│   │   │   └── main.js
│   │   ├── icons/
│   │   │   ├── icon-192.png
│   │   │   └── icon-512.png
│   │   ├── manifest.json
│   │   └── service-worker.js
│   │
│   └── templates/
│       ├── layout.html
│       ├── index.html
│       ├── lotofacil.html
│       ├── megasena.html
│       ├── quina.html
│       ├── lotomania.html
│       ├── dupla_sena.html
│       ├── timemania.html
│       └── federal.html
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
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
- Funciona offline (PWA)
- Instalável no desktop e mobile

---

## ⚙️ Como executar

1. Crie e ative o ambiente virtual:

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
```

2. Instale dependências:
```bash
pip install -r requirements.txt
```
# loterias-pwa-python
