# API de Eventos

API RESTful para gerenciamento de eventos comunitários.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize (SQLite)
- JWT para autenticação
- Cors, Helmet para segurança

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/eventos-api.git
cd eventos-api
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo .env na raiz do projeto:
```
NODE_ENV=development
PORT=3000
JWT_SECRET=sua_chave_secreta_aqui
```

4. Inicie o servidor:
```bash
npm run dev
```

## Endpoints

### Eventos

- `GET /api/v1/eventos` - Lista todos os eventos
- `GET /api/v1/eventos/:id` - Busca um evento específico
- `POST /api/v1/eventos` - Cria um novo evento
- `PUT /api/v1/eventos/:id` - Atualiza um evento
- `DELETE /api/v1/eventos/:id` - Remove um evento

### Formato do Evento

```json
{
  "nome": "Nome do Evento",
  "descricao": "Descrição do evento",
  "data": "2024-03-20T19:00:00.000Z",
  "local": "Local do evento"
}
```

## Desenvolvimento

Para rodar em modo desenvolvimento com reload automático:

```bash
npm run dev
``` 