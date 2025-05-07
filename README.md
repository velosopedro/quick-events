# 🎉 QuickEvents API

<div align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow" alt="Status: Em Desenvolvimento"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version: 1.0.0"/>
  <img src="https://img.shields.io/badge/Node.js-14.x-green" alt="Node.js 14.x"/>
  <img src="https://img.shields.io/badge/API-REST-orange" alt="API REST"/>
</div>

<br>

<div align="center">
  <p>✨ Conectando pessoas a eventos comunitários ✨</p>
  <p>Uma plataforma que facilita a descoberta e participação em eventos locais</p>
</div>

## 📋 Sobre o Projeto

O QuickEvents é uma API RESTful desenvolvida para conectar pessoas a eventos comunitários e pequenos encontros locais. Nossa missão é facilitar a organização e participação em eventos que fortalecem a comunidade, promovendo a interação social e o desenvolvimento local.

### 🎯 Objetivos

- Facilitar a descoberta de eventos comunitários
- Promover a interação social local
- Simplificar a organização de eventos
- Conectar pessoas com interesses similares

### ✨ Funcionalidades

- **Gestão de Eventos**

  - Criação e gerenciamento de eventos
  - Sistema de inscrição
  - Listagem de eventos por categoria
  - Busca por localização

- **Gestão de Usuários**

  - Cadastro e autenticação
  - Perfis personalizados
  - Histórico de participação
  - Sistema de favoritos

- **Segurança**
  - Autenticação JWT
  - Validação de dados
  - Proteção contra injeção SQL
  - Headers de segurança

## 🚀 Tecnologias

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize"/>
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT"/>
</div>

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Git
- Um editor de código (recomendamos VS Code)

### Passo a Passo

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/quick-events.git
   cd quick-events
   ```

2. **Instale as Dependências**

   ```bash
   npm install
   ```

3. **Configure o Ambiente**

   - Crie um arquivo `.env` na raiz do projeto
   - Adicione as seguintes variáveis:

   ```env
   NODE_ENV=development
   PORT=3000
   JWT_SECRET=sua_chave_secreta
   DATABASE_URL=sqlite://./database.sqlite
   ```

4. **Configure o Banco de Dados**

   ```bash
   # Cria as tabelas no banco de dados
   npm run db:migrate

   # Se precisar resetar o banco de dados
   npm run db:reset
   ```

5. **Inicie o Servidor**
   ```bash
   # Inicia em modo desenvolvimento com hot-reload
   npm run dev
   ```

## 📝 Endpoints

### Autenticação

| Método | Endpoint                | Descrição                |
| ------ | ----------------------- | ------------------------ |
| POST   | `/api/v1/auth/register` | Registra um novo usuário |
| POST   | `/api/v1/auth/login`    | Realiza login do usuário |

### Eventos

| Método | Endpoint              | Descrição                  |
| ------ | --------------------- | -------------------------- |
| GET    | `/api/v1/eventos`     | Lista todos os eventos     |
| GET    | `/api/v1/eventos/:id` | Busca um evento específico |
| POST   | `/api/v1/eventos`     | Cria um novo evento        |
| PUT    | `/api/v1/eventos/:id` | Atualiza um evento         |
| DELETE | `/api/v1/eventos/:id` | Remove um evento           |

### 📋 Formato do Evento

```json
{
  "nome": "Encontro de Música",
  "descricao": "Encontro para tocar violão e cantar",
  "data": "2024-03-20T19:00:00.000Z",
  "local": "Praça Central",
  "categoria": "Música",
  "vagas": 20
}
```

## 📚 Documentação

A documentação completa da API está disponível através do Swagger UI:

```
http://localhost:3000/api-docs
```

### Exemplos de Uso

1. **Registrar um Usuário**

   ```bash
   curl -X POST http://localhost:3000/api/v1/auth/register \
   -H "Content-Type: application/json" \
   -d '{
     "nome": "João Silva",
     "email": "joao@email.com",
     "senha": "123456"
   }'
   ```

2. **Criar um Evento**
   ```bash
   curl -X POST http://localhost:3000/api/v1/eventos \
   -H "Content-Type: application/json" \
   -H "Authorization: Bearer seu_token_jwt" \
   -d '{
     "nome": "Encontro de Música",
     "descricao": "Encontro para tocar violão e cantar",
     "data": "2024-03-20T19:00:00.000Z",
     "local": "Praça Central",
     "categoria": "Música",
     "vagas": 20
   }'
   ```

## 💻 Desenvolvimento

### Comandos Úteis

```bash
# Iniciar em modo desenvolvimento
npm run dev

# Recriar banco de dados
npm run db:reset

# Atualizar estrutura do banco
npm run db:migrate

# Verificar logs
npm run logs
```

### Solução de Problemas

1. **Erro de Porta em Uso**

   - Altere a porta no arquivo `.env`
   - Exemplo: `PORT=3001`

2. **Erro de Banco de Dados**

   - Verifique se o arquivo `database.sqlite` foi criado
   - Execute `npm run db:reset`

3. **Erro de Autenticação**
   - Verifique se o token JWT está correto
   - Certifique-se de incluir o prefixo "Bearer" no header

## 🔜 Próximos Passos

- [ ] Implementar sistema de notificações
- [ ] Adicionar geolocalização para eventos próximos
- [ ] Desenvolver interface web
- [ ] Implementar sistema de comentários
- [ ] Adicionar upload de fotos dos eventos

---

<div align="center">
  <p>Desenvolvido com 💜 para conectar pessoas</p>
  <p>QuickEvents - 2024</p>
</div>
