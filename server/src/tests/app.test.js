const request = require('supertest');
const { it, describe, before } = require('mocha');
const { expect } = require('chai');
const yup = require('yup');
const jwt = require('jsonwebtoken');
const app = require('../app');
const { JWT_SECRET, ACCESS_TOKEN_TIME } = require('../constants');

const userCredentials = { email: 'customer@mail.com', password: '123456' };
const TOKEN_VALIDATION_SCHEMA = yup.object({
  token: yup
    .string()
    .matches(/^(\w|-)+\.(\w|-)+\.(\w|-)+$/)
    .required(),
});

describe('Testing app', () => {
  describe('Testing public endpoints', () => {
    describe('POST /login', () => {
      it('response should be 200 {token: "sfsdf.sdfdf.dgtr"} Content-Type json when valid login/passw (user exists)', (done) => {
        request(app)
          .post('/login')
          .send(userCredentials)
          .expect(200)
          .expect('Content-Type', /json/)
          .then((res) => {
            expect(TOKEN_VALIDATION_SCHEMA.isValidSync(res.body)).to.be.true;
            done();
          })
          .catch((err) => done(err));
      });
      it('response should be 400 "Invalid data for login" when invalid login/email', (done) => {
        request(app)
          .post('/login')
          .send({ email: 'qwerty', password: 'qwerty' })
          .expect(400)
          .expect('Invalid data for login')
          .end(done);
      });
      it('response should be 500 "user with this data didn`t exist" then login/passw is valid? but user doesn`t exist', (done) => {
        request(app)
          .post('/login')
          .send({ email: 'qwerty@gmail.com', password: 'qwerty' })
          .expect(404)
          .expect('user with this data didn`t exist')
          .end(done);
      });
    });
  });
  describe('Testing private endpoints', () => {
    let token;
    before((done) => {
      request(app)
        .post('/login')
        .send(userCredentials)
        .then((res) => {
          token = res.body.token;
          done();
        })
        .catch((err) => done(err));
    });
    describe('POST /getUser', () => {
      it('request should be 200 req.body.email = userCredentials.email Content-Type /json/ when valid token of existing user', (done) => {
        request(app)
          .post('/getUser')
          .set('Authorization', token)
          .expect(200)
          .expect('Content-Type', /json/)
          .then((res) => {
            expect(res.body.email).to.equal(userCredentials.email);
            done();
          })
          .catch((err) => done(err));
      });
      it('request should be 408 "need token" when token is missed', (done) => {
        request(app)
          .post('/getUser')
          .expect(408)
          .expect('need token')
          .end(done);
      });
      it('request should be 408 "token error" when token is invalid', (done) => {
        request(app)
          .post('/getUser')
          .set('Authorization', 'invalid.token')
          .expect(408)
          .expect('token error')
          .end(done);
      });
      it('request should be 404 "user with this data didn`t exist" when token is valid, but not correspond to user', (done) => {
        const fakeUserToken = jwt.sign(
          {
            userId: 0,
          },
          JWT_SECRET,
          {
            expiresIn: ACCESS_TOKEN_TIME,
          },
        );
        request(app)
          .post('/getUser')
          .set('Authorization', fakeUserToken)
          .expect(408)
          .expect('user with this data didn`t exist')
          .end(done);
      });
    });
  });
});
