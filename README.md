# 🎉 QuickEvents

<div align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-green" alt="Status: Concluído"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version: 1.0.0"/>
</div>

<br>

<div align="center">
  <p>✨ API RESTful para gerenciamento de eventos comunitários ✨</p>
  <p>Desenvolvido com 💜 pelos alunos do 2°DS Manhã da ETEC Zona Leste</p>
</div>

## 📋 Sobre o Projeto

O QuickEvents é uma API RESTful desenvolvida para facilitar o gerenciamento de eventos comunitários. O projeto foi desenvolvido como parte do curso de Desenvolvimento de Sistemas da ETEC Zona Leste, com o objetivo de aplicar os conhecimentos adquiridos em sala de aula em um projeto real.

### 🎯 Objetivos

- Criar uma API robusta e escalável para gerenciamento de eventos
- Implementar boas práticas de desenvolvimento e segurança
- Aplicar os conceitos aprendidos em sala de aula
- Desenvolver uma solução que possa ser utilizada pela comunidade

### ✨ Funcionalidades

- **Gestão Completa de Eventos**

  - Criação, leitura, atualização e exclusão de eventos
  - Validação de dados e datas
  - Busca por eventos específicos

- **Segurança**

  - Proteção contra injeção SQL
  - Validação de dados
  - Headers de segurança com Helmet
  - CORS configurado

- **Documentação**

  - Swagger UI para documentação interativa
  - README detalhado
  - Código comentado

- **Banco de Dados**
  - SQLite para desenvolvimento
  - Migrations para controle de versão
  - Modelos com validações

## 🚀 Tecnologias

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize"/>
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>
</div>

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/quick-events.git
cd quick-events
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o ambiente:

```bash
# Crie um arquivo .env na raiz do projeto
NODE_ENV=development
PORT=3000
```

4. Inicie o servidor:

```bash
npm run dev
```

## 📝 Endpoints

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
  "nome": "Nome do Evento",
  "descricao": "Descrição do evento",
  "data": "2024-03-20T19:00:00.000Z",
  "local": "Local do evento"
}
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
```

## 📚 Documentação

A documentação completa da API está disponível em:

```
http://localhost:3000/api-docs
```

## 👥 Equipe

<div align="center">

### Desenvolvedores

| Nome                 | Função                   |
| -------------------- | ------------------------ |
| Pedro Veloso         | Desenvolvedor Full Stack |
| Guilherme Penarrubia | Desenvolvedor Backend    |
| Leonardo Eiji        | Desenvolvedor Frontend   |
| Pedro Henrique Amaro | Desenvolvedor Full Stack |

</div>

## 🔜 Próximos Passos

- [ ] Implementar autenticação de usuários
- [ ] Adicionar sistema de categorias para eventos
- [ ] Desenvolver interface web
- [ ] Adicionar sistema de notificações
- [ ] Implementar busca avançada de eventos

---

<div align="center">
  <p>Desenvolvido com 💜 pelos alunos do 2°DS Manhã</p>
  <p>ETEC Zona Leste - 2024</p>
</div>
