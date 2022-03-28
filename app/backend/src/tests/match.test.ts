import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match';

import { Response } from 'superagent';
import { ADMIN_PAYLOAD, MATCHS } from './mocks';
import * as jsonwebtoken from 'jsonwebtoken';

chai.use(chaiHttp);

const { expect } = chai;

describe('Match Tests', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Match, 'findByPk')
      .resolves(MATCHS[0] as unknown as Match);
    sinon
      .stub(Match, 'findAll')
      .resolves(MATCHS as unknown as Match[]);
    sinon
      .stub(Match, 'create')
      .resolves({ id: 10 } as unknown as Match);
    sinon
      .stub(Match, 'update')
      .resolves([ 1 ] as unknown as any);
    sinon
      .stub(jsonwebtoken, 'verify')
      .resolves(ADMIN_PAYLOAD);
  });

  after(() => {
    (Match.findByPk as sinon.SinonStub).restore();
    (Match.create as sinon.SinonStub).restore();
    (Match.update as sinon.SinonStub).restore();
    (jsonwebtoken.verify as sinon.SinonStub).restore();
  });

  it('should return the correct Matchs', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/matchs');
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(MATCHS);
  });
  it('should insert correctly a new Match', async () => {
    const newMatch = {
      homeTeam: 2,
      awayTeam: 1,
      homeTeamGoals: 15,
      awayTeamGoals: 2,
      inProgress: true
    }
    chaiHttpResponse = await chai
      .request(app).post('/matchs')
      .set('Authorization', 'tokenValidation')
      .send(newMatch);
    expect(chaiHttpResponse.status).to.equal(201);
    expect(chaiHttpResponse.body).to.be.deep.equal({ id: 10, ...newMatch });
  });

  it('should return 401 status if try to create match with 2 equals teams', async () => {
    const newMatch = {
      homeTeam: 1,
      awayTeam: 1,
      homeTeamGoals: 15,
      awayTeamGoals: 2,
      inProgress: true
    }
    chaiHttpResponse = await chai
      .request(app).post('/matchs')
      .set('Authorization', 'tokenValidation')
      .send(newMatch);
    expect(chaiHttpResponse.status).to.equal(401);
  });

  it('should return status 401 if trying to create new match by passing wrong parameter types', async () => {
    const newMatch = {
      homeTeam: 2,
      awayTeam: 'isso nao deveria ser uma string',
      homeTeamGoals: 5,
      awayTeamGoals: 0,
      inProgress: true
    }
    chaiHttpResponse = await chai
      .request(app).post('/matchs')
      .set('Authorization', 'tokenValidation')
      .send(newMatch);
    expect(chaiHttpResponse.status).to.equal(401);
  });

  it('should return status 404 if no matchs found', async () => {
    (Match.findAll as sinon.SinonStub).resolves(false);
    chaiHttpResponse = await chai
      .request(app).get('/matchs');
    expect(chaiHttpResponse.status).to.equal(404);
  });

  it('Should finish the match', async() => {
    chaiHttpResponse = await chai
      .request(app).patch('/matchs/1/finish')
      .set('Authorization', 'tokenValidation');
    expect(chaiHttpResponse.status).to.equal(200);
    chaiHttpResponse = await chai
      .request(app).patch('/matchs/1/finish')
      .set('Authorization', 'tokenValidation');
    expect(chaiHttpResponse.status).to.equal(400);
  });

  it('Should update match', async () => {
    const newMatch = {
      homeTeamGoals: 15,
      awayTeamGoals: 2,
      inProgress: false
    }
    chaiHttpResponse = await chai
      .request(app).patch('/matchs/1')
      .set('Authorization', 'tokenValidation')
      .send(newMatch);
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({ id: 1, ...newMatch });
  });

  it('should return 500 error if query fails', async () => {
    (Match.findAll as sinon.SinonStub).rejects(new Error('error'));
    chaiHttpResponse = await chai
      .request(app).get('/matchs');
    expect(chaiHttpResponse.status).to.equal(500);
  });

  it('should return 404 error if query fails', async () => {
    (Match.findByPk as sinon.SinonStub).rejects(new Error('error'));
    chaiHttpResponse = await chai
      .request(app).get('/matchs/1');
    expect(chaiHttpResponse.status).to.equal(404);
  });
});
