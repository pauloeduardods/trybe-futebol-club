import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';
import { ADMIN } from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('User Tests', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(ADMIN as User);
  });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('should login correctly', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app).del()
  //   expect(...)
  // });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
