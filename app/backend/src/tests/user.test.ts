import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';
import { ADMIN, ADMIN_PAYLOAD } from './mocks';
import * as jsonwebtoken from 'jsonwebtoken';

chai.use(chaiHttp);

const { expect } = chai;

describe('User Tests', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, 'findOne')
      .resolves(ADMIN as User);
    sinon
      .stub(User, 'findByPk')
      .resolves(ADMIN as User);
    sinon
      .stub(jsonwebtoken, 'sign')
      .resolves('token');
    // (jsonwebtoken.verify as sinon.SinonStub).resolves(ADMIN_PAYLOAD);
    sinon
      .stub(jsonwebtoken, 'verify')
      .resolves(ADMIN_PAYLOAD);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
    (User.findByPk as sinon.SinonStub).restore();
    (jsonwebtoken.sign as sinon.SinonStub).restore();
    (jsonwebtoken.verify as sinon.SinonStub).restore(); 
  });

  it('should login correctly', async () => {
    const { id, username, role, email } = ADMIN;
    const userResponse = { id, username, role, email };
    chaiHttpResponse = await chai
      .request(app).post('/login').send({
          email: ADMIN.email,
          password: 'secret_admin',
      });
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.have.property('token');
    expect(chaiHttpResponse.body.token).to.equal('token');
    expect(chaiHttpResponse.body).to.have.property('user');
    expect(chaiHttpResponse.body.user).to.deep.equal(userResponse);
    expect(chaiHttpResponse.body).to.not.have.property('password');
  });

  it('should not login with wrong password', async () => {
    chaiHttpResponse = await chai
      .request(app).post('/login').send({
          email: ADMIN.email,
          password: 'wrong_password',
      });
    expect(chaiHttpResponse.status).to.equal(401);
  });
  it('should not login with wrong email', async () => {
    chaiHttpResponse = await chai
      .request(app).post('/login').send({
          email: 'sla',
          password: 'secret_admin',
      });
    expect(chaiHttpResponse.status).to.equal(401);
  });

  it('should return the correctly role', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/login/validate')
      .set('Authorization', 'token');
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.text).to.equal('admin');
  });

  it('should not return the correctly role', async () => {
    (jsonwebtoken.verify as sinon.SinonStub).throws(new Error('Invalid token'));
    chaiHttpResponse = await chai
      .request(app).get('/login/validate')
      .set('Authorization', 'token');
    expect(chaiHttpResponse.status).to.equal(401);
  });

  it('should not login if DB fails', async () => {
    (User.findOne as sinon.SinonStub).rejects(new Error('DB error'));
    chaiHttpResponse = await chai
      .request(app).post('/login').send({
          email: ADMIN.email,
          password: 'secret_admin',
      });
    expect(chaiHttpResponse.status).to.equal(500);
  });
});
