
# ✨ Glow & Co.

Um protótipo de e-commerce de artigos de maquiagem desenvolvido como **projeto acadêmico**, com foco na aplicação prática de conceitos de desenvolvimento Front-End utilizando React.

A aplicação apresenta uma interface moderna e responsiva, com componentização, gerenciamento de estado, navegação entre páginas e consumo de uma API local para carregamento dinâmico dos produtos.

---

## 🎓 Informações Acadêmicas

- **Aluna:** Shakyra Seli Portes
- **Disciplina:** Desenvolvimento Front End 2
- **Projeto:** Glow & Co. App

---

## 🛠️ Tecnologias Utilizadas

**React** 
**Vite**
**JavaScript / TypeScript**
**Tailwind CSS**
**React Router DOM**
**Mockoon**

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [Mockoon](https://mockoon.com/) (para simulação da API local)
- Git (opcional, para clonar o repositório)

---

## 🚀 Como instalar e executar o Front-End

### 1. Instale as dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### 2. Configure as variáveis de ambiente

Na raiz do projeto, localize o arquivo `.env.example`.

Crie uma cópia chamada `.env`:

```bash
cp .env.example .env
```

> **Windows:** você também pode criar manualmente um arquivo `.env` na raiz do projeto, copiando o conteúdo do `.env.example`.

Verifique se a URL da API está configurada corretamente:

```env
VITE_API_URL=http://localhost:3000
```

> A URL deve corresponder à porta configurada no Mockoon.

### 3. Inicie o servidor de desenvolvimento

Execute o comando:

```bash
npm run dev
```

Após iniciar, acesse o endereço exibido no terminal.

Por padrão, o Vite disponibiliza a aplicação em:

[http://localhost:5173](http://localhost:5173)

---

## 🔌 Como configurar e executar a API com Mockoon

O projeto utiliza o **Mockoon** para simular uma API local responsável por fornecer os dados dos produtos.

O ambiente da API já está configurado no arquivo `mockoon-environment.json`, disponível na raiz do projeto.

### 1. Abra o Mockoon

Inicie o aplicativo [Mockoon](https://mockoon.com/) instalado em sua máquina.

### 2. Importe o ambiente da API

No menu superior, acesse:

**File → Import/export → Import environment from file**

Selecione o arquivo:

```text
mockoon-environment.json
```

Após a importação, o ambiente **Glow & Co. API** estará disponível na barra lateral do Mockoon.

### 3. Inicie o servidor

1. Selecione o ambiente **Glow & Co. API**.
2. Verifique se a porta está configurada como `3000`.
3. Clique no botão verde de **Play (▶️)** no canto superior esquerdo.

A API estará disponível em:

```text
http://localhost:3000
```

### 4. Verifique o endpoint de produtos

Com o servidor em execução, a aplicação poderá consumir os produtos por meio do endpoint configurado no ambiente.

Exemplo:

```text
GET http://localhost:3000/products
```

> Certifique-se de que o Mockoon esteja em execução antes de acessar a aplicação, para que os produtos sejam carregados corretamente.
