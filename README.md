# 📅 Projeto Agenda

Uma aplicação web completa de agenda de contatos, com autenticação de usuários, cadastro, edição e remoção de contatos.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript no servidor
- **Express** — Framework web para Node.js
- **MongoDB + Mongoose** — Banco de dados NoSQL e ODM
- **EJS** — Template engine para renderização das views
- **Webpack + Babel** — Bundler e transpilador do JavaScript do frontend
- **bcryptjs** — Criptografia de senhas
- **express-session + connect-mongo** — Gerenciamento de sessões persistidas no MongoDB
- **connect-flash** — Mensagens de feedback (flash messages)
- **helmet** — Segurança nos headers HTTP
- **csurf** — Proteção contra ataques CSRF
- **dotenv** — Gerenciamento de variáveis de ambiente
- **nodemon** — Reinicialização automática do servidor em desenvolvimento

---

## 📁 Estrutura do Projeto

```
projeto-agenda/
├── frontend/          # Arquivos JS/CSS do frontend (processados pelo Webpack)
├── public/
│   └── assets/
│       └── js/        # Bundles gerados pelo Webpack
├── src/               # Lógica do backend (models, controllers, etc.)
├── .gitignore
├── package.json
├── routes.js          # Definição das rotas da aplicação
├── server.js          # Ponto de entrada da aplicação
└── webpack.config.js  # Configuração do Webpack
```

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local ou via Atlas)

---

## 🔧 Instalação e Configuração

**1. Clone o repositório:**
```bash
git clone https://github.com/V-Magalhaes948/projeto-agenda.git
cd projeto-agenda
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
MONGODB_URI=mongodb://localhost:27017/projeto-agenda
SESSION_SECRET=sua_chave_secreta_aqui
```

**4. Execute o bundle do frontend:**
```bash
npm run dev
```

**5. Inicie o servidor:**
```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

---

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicia o servidor com nodemon (hot reload) |
| `npm run dev` | Inicia o Webpack em modo watch para o frontend |

---

## 🔐 Funcionalidades

- Cadastro e login de usuários com senha criptografada
- Sessões persistidas no banco de dados
- Proteção das rotas com autenticação
- Criação, edição e exclusão de contatos
- Mensagens de feedback ao usuário (flash messages)
- Proteção CSRF nas requisições
- Headers de segurança com Helmet
