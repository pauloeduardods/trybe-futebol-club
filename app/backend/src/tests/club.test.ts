import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Club from '../database/models/Club';

import { Response } from 'superagent';
import { CLUBS } from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Club Tests', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Club, 'findByPk')
      .resolves(CLUBS[0] as Club);
    sinon
      .stub(Club, 'findAll')
      .resolves(CLUBS as Club[]);
  });

  after(() => {
    (Club.findAll as sinon.SinonStub).restore();
    (Club.findByPk as sinon.SinonStub).restore();
  });

  it('should return the correct clubs', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/clubs');
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(CLUBS);
  });

  it('should return the correct club with specific id', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/clubs/1');
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(CLUBS[0]);
  });
  it('should return 500 error if query fails', async () => {
    (Club.findAll as sinon.SinonStub).rejects(new Error('error'));
    chaiHttpResponse = await chai
      .request(app).get('/clubs');
    expect(chaiHttpResponse.status).to.equal(500);
  });

  it('should return 500 error if query fails', async () => {
    (Club.findByPk as sinon.SinonStub).rejects(new Error('error'));
    chaiHttpResponse = await chai
      .request(app).get('/clubs/1');
    expect(chaiHttpResponse.status).to.equal(500);
  });
});
