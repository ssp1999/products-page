# ✨ Glow & Co.

Este protótipo de e-commerce de artigos de maquiagem é um <strong className="text-pink-600 font-semibold">projeto acadêmico</strong> desenvolvido para aplicar conceitos de criação de interfaces, componentização e gerenciamento de estado em React. A aplicação apresenta uma interface moderna e responsiva, com consumo de API local e comunicação entre componentes.

---

## 🎓 Informações Acadêmicas
- *Aluna:* Shakyra Seli Portes
- *Disciplina:* Desenvolvimento Front End 2
- *Projeto:* Glow & Co. App
- *Objetivo:* Aplicação prática de componentização em React, hooks (useState, useEffect), React Router, consumo de APIs e estilização com Tailwind CSS.

---

## 🛠️ Tecnologias Utilizadas
- *React* (com Vite)
- *TypeScript* / *JavaScript*
- *Tailwind CSS* (Estilização "Utility-first")
- *React Router DOM* (Navegação SPA)
- *Mockoon* (Mock de API Local)

---

## ⚙️ Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [Mockoon](https://mockoon.com/) (Para simular a API do back-end)

---

## 🚀 Como instalar e rodar o Front-End

1. *Abra o terminal na pasta do projeto* e instale as dependências:
   ```bash
   npm install
Configure as Variáveis de Ambiente:

Na raiz do projeto, localize o arquivo .env.example.

Crie uma cópia dele ou renomeie-o para .env.

Certifique-se de que a URL da API está configurada corretamente:

Code snippet
VITE_API_URL=http://localhost:3000
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Acesse o projeto no navegador através do link fornecido no terminal (geralmente http://localhost:5173).

🔌 Como conectar e rodar a API (Mockoon)
Para que os produtos sejam carregados dinamicamente, o projeto consome uma API simulada no Mockoon. Deixei o ambiente totalmente configurado para facilitar os testes!

Abra o aplicativo Mockoon.

No menu superior, vá em File > Import/export > Import environment from file.

Selecione o arquivo mockoon-environment.json que está na raiz deste projeto.

O ambiente "Glow & Co. Api" vai aparecer na barra lateral.

Clique no botão verde de Play (▶️) no topo esquerdo do Mockoon para iniciar o servidor na porta 3000.
