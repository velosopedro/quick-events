# Quick Events API

API RESTful para gerenciamento de eventos com autenticação JWT.

## 🚀 Funcionalidades

- Autenticação com JWT
- CRUD completo de eventos
- Controle de acesso baseado em roles
- Documentação com Swagger
- Testes automatizados

## 📋 Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- SQLite

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/quick-events.git
cd quick-events
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com:

```
NODE_ENV=development
PORT=3000
JWT_SECRET=sua_chave_secreta
```

4. Execute as migrações:

```bash
npx sequelize-cli db:migrate
```

5. Inicie o servidor:

```bash
npm run dev
```

## 📚 Documentação

A documentação da API está disponível em:

```
http://localhost:3000/api-docs
```

## 🔐 Autenticação

A API usa JWT para autenticação. Para acessar rotas protegidas:

1. Registre um usuário:

```bash
POST /api/v1/auth/register
{
  "nome": "Seu Nome",
  "email": "seu@email.com",
  "senha": "123456"
}
```

2. Faça login:

```bash
POST /api/v1/auth/login
{
  "email": "seu@email.com",
  "senha": "123456"
}
```

3. Use o token retornado no header das requisições:

```
Authorization: Bearer seu_token_jwt
```

## 🎯 Endpoints

### Autenticação

- `POST /api/v1/auth/register` - Registro de usuário
- `POST /api/v1/auth/login` - Login
- `GET /api/v1/auth/me` - Dados do usuário logado

### Eventos

- `GET /api/v1/eventos` - Lista todos os eventos
- `POST /api/v1/eventos` - Cria um evento
- `GET /api/v1/eventos/:id` - Busca um evento
- `PUT /api/v1/eventos/:id` - Atualiza um evento
- `DELETE /api/v1/eventos/:id` - Remove um evento

## 🧪 Testes

Execute os testes com:

```bash
npm test
```

## 📦 Estrutura do Projeto

```
quick-events/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── swagger.json
│   ├── controllers/
│   │   ├── AuthController.js
│   │   └── EventoController.js
│   ├── middlewares/
│   │   └── auth.js
│   ├── models/
│   │   ├── Evento.js
│   │   ├── Usuario.js
│   │   └── index.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── eventos.js
│   │   └── index.js
│   ├── tests/
│   │   ├── auth.test.js
│   │   └── eventos.test.js
│   ├── app.js
│   └── server.js
├── migrations/
├── config/
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🔒 Segurança

- Autenticação JWT
- Senhas criptografadas com bcrypt
- Validação de dados
- Proteção contra SQL Injection
- Headers de segurança com Helmet

## 🛠️ Tecnologias

- Node.js
- Express
- Sequelize
- SQLite
- JWT
- Jest
- Swagger

## 📝 Licença

Este projeto está sob a licença MIT.

## 👥 Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
