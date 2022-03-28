import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Club from '../database/models/Club';

import { Response } from 'superagent';
import { EXPECTED_LEADERBOARD_RESULT, LEADERBOARDMODEL } from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Leaderboard Tests', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Club, 'findAll')
      .resolves(LEADERBOARDMODEL as unknown as Club[]);
  });

  after(() => {
    (Club.findAll as sinon.SinonStub).restore();
  });

  it('should return the correct leaderboard', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/leaderboard');
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(EXPECTED_LEADERBOARD_RESULT);
  });
});