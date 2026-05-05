# 📅 Projeto Agenda

Projeto desenvolvido durante meus estudos de Node.js e JavaScript. Trata-se de uma aplicação web de agenda de contatos com autenticação de usuários.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** + **Express** — Servidor e rotas
- **MongoDB + Mongoose** — Banco de dados
- **EJS** — Template engine para as views
- **Webpack + Babel** — Bundler do frontend
- **bcryptjs** — Criptografia de senhas
- **express-session** — Gerenciamento de sessões
- **dotenv** — Variáveis de ambiente

---

## 📁 Estrutura do Projeto

```
projeto-agenda/
├── frontend/        # JS/CSS do frontend
├── public/          # Arquivos gerados pelo Webpack
├── src/             # Models, controllers e afins
├── routes.js        # Rotas da aplicação
├── server.js        # Ponto de entrada
└── webpack.config.js
```

---

## ⚙️ Como rodar o projeto

**1. Clone o repositório:**
```bash
git clone https://github.com/V-Magalhaes948/projeto-agenda.git
cd projeto-agenda
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Crie um arquivo `.env` na raiz com:**
```env
MONGODB_URI=mongodb://localhost:27017/projeto-agenda
SESSION_SECRET=sua_chave_secreta_aqui
```

**4. Em terminais separados, rode:**
```bash
npm run dev   # Webpack em modo watch
npm start     # Servidor com nodemon
```

Acesse em `http://localhost:3000`.

---

## 📚 O que aprendi com esse projeto

- Criar um servidor com Express e organizar rotas
- Conectar e manipular dados com MongoDB e Mongoose
- Autenticação de usuários com sessão e senhas criptografadas
- Renderizar páginas dinâmicas com EJS
- Configurar Webpack e Babel para o frontend
- Boas práticas básicas de segurança (Helmet, CSRF, dotenv)

---
