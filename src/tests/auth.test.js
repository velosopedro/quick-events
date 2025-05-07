const request = require('supertest');
const app = require('../app');
const sequelize = require('./setup');
const { Usuario } = require('../models');

let server;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  server = app.listen(0);
});

afterAll(async () => {
  await server.close();
  await sequelize.close();
});

describe('Testes de Autenticação', () => {
  beforeEach(async () => {
    await sequelize.models.Usuario.destroy({ where: {} });
  });

  describe('POST /api/v1/auth/register', () => {
    it('deve registrar um novo usuário', async () => {
      const usuario = {
        nome: 'Teste',
        email: 'teste@teste.com',
        senha: '123456'
      };

      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(usuario);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('token');
      expect(response.body.usuario).toHaveProperty('id');
      expect(response.body.usuario.email).toBe(usuario.email);
    });

    it('não deve registrar usuário com email duplicado', async () => {
      // Primeiro registro
      await Usuario.create({
        nome: 'Teste',
        email: 'teste@teste.com',
        senha: '123456'
      });

      // Tentativa de registro com mesmo email
      const usuario = {
        nome: 'Teste 2',
        email: 'teste@teste.com',
        senha: '123456'
      };

      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(usuario);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('POST /api/v1/auth/login', () => {
    beforeEach(async () => {
      // Criar usuário para testes de login
      await Usuario.create({
        nome: 'Teste',
        email: 'teste@teste.com',
        senha: '123456'
      });
    });

    it('deve fazer login com credenciais válidas', async () => {
      const credenciais = {
        email: 'teste@teste.com',
        senha: '123456'
      };

      const response = await request(app)
        .post('/api/v1/auth/login')
        .send(credenciais);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
      expect(response.body.usuario).toHaveProperty('id');
    });

    it('não deve fazer login com senha inválida', async () => {
      const credenciais = {
        email: 'teste@teste.com',
        senha: 'senha_errada'
      };

      const response = await request(app)
        .post('/api/v1/auth/login')
        .send(credenciais);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });

    it('não deve fazer login com email inexistente', async () => {
      const credenciais = {
        email: 'inexistente@teste.com',
        senha: '123456'
      };

      const response = await request(app)
        .post('/api/v1/auth/login')
        .send(credenciais);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });
}); 