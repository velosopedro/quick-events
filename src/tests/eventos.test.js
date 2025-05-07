const request = require('supertest');
const app = require('../app');
const sequelize = require('./setup');
const { Usuario } = require('../models');

let server;
let token;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  server = app.listen(0);

  // Criar usuário de teste e obter token
  const usuario = await Usuario.create({
    nome: 'Teste',
    email: 'teste@teste.com',
    senha: '123456'
  });

  const response = await request(app)
    .post('/api/v1/auth/login')
    .send({
      email: 'teste@teste.com',
      senha: '123456'
    });

  token = response.body.token;
});

afterAll(async () => {
  await server.close();
  await sequelize.close();
});

describe('Testes da API de Eventos', () => {
  let eventoId;

  beforeEach(async () => {
    await sequelize.models.Evento.destroy({ where: {} });
  });

  describe('POST /api/v1/eventos', () => {
    it('deve criar um novo evento', async () => {
      const evento = {
        nome: 'Teste de Evento',
        descricao: 'Descrição do evento de teste',
        data: '2024-03-20T19:00:00.000Z',
        local: 'Local de Teste'
      };

      const response = await request(app)
        .post('/api/v1/eventos')
        .set('Authorization', `Bearer ${token}`)
        .send(evento);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.nome).toBe(evento.nome);
      
      eventoId = response.body.id;
    });
  });

  describe('GET /api/v1/eventos', () => {
    it('deve listar todos os eventos', async () => {
      const response = await request(app)
        .get('/api/v1/eventos')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/v1/eventos/:id', () => {
    it('deve retornar um evento específico', async () => {
      const response = await request(app)
        .get(`/api/v1/eventos/${eventoId}`)
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(eventoId);
    });

    it('deve retornar 404 para evento inexistente', async () => {
      const response = await request(app)
        .get('/api/v1/eventos/99999')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(404);
    });
  });

  describe('PUT /api/v1/eventos/:id', () => {
    it('deve atualizar um evento', async () => {
      const atualizacao = {
        nome: 'Evento Atualizado',
        descricao: 'Nova descrição'
      };

      const response = await request(app)
        .put(`/api/v1/eventos/${eventoId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(atualizacao);

      expect(response.status).toBe(200);
      expect(response.body.nome).toBe(atualizacao.nome);
    });
  });

  describe('DELETE /api/v1/eventos/:id', () => {
    it('deve deletar um evento', async () => {
      const response = await request(app)
        .delete(`/api/v1/eventos/${eventoId}`)
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(204);
    });

    it('deve retornar 404 ao tentar deletar evento inexistente', async () => {
      const response = await request(app)
        .delete('/api/v1/eventos/99999')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(404);
    });
  });
}); 