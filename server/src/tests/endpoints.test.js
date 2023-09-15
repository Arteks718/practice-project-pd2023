const request = require('supertest');
const { describe, it } = require('mocha');
const { expect } = require('chai');
const app = require('../app');

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJjdXN0b21lck4iLCJ1c2VySWQiOjEsInJvbGUiOiJjdXN0b21lciIsImxhc3ROYW1lIjoiY3VzdG9tZXJMIiwiYXZhdGFyIjoiYW5vbi5wbmciLCJkaXNwbGF5TmFtZSI6ImN1c3RvbWVyRE4iLCJiYWxhbmNlIjoiMCIsImVtYWlsIjoiY3VzdG9tZXJAbWFpbC5jb20iLCJyYXRpbmciOjAsImlhdCI6MTY5NDc5NDA0NiwiZXhwIjoxNjk0Nzk3NjQ2fQ.JokhVcKG7Xw5DR-wE_NyPMnR2pTRn-nS4i0_1wgRvg4';

describe('Testing endpoints', () => {
  describe('Testing public endpoint GET /offers', () => {
    it('should return a array of offers', (done) => {
      request(app)
        .get('/offers/')
        .expect(200)
        .expect('Content-Type', /json/)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch((err) => done(err));
    });
  });
  describe('Testing private endpoint POST /dataForContest', () => {
    it('response should be 200, set a Authorization token, sending object { characteristic1, characteristic2 }, should return a object with property { typeOfName, nameStyle, industry }', (done) => {
      request(app)
        .post('/dataForContest')
        .set('Authorization', TOKEN)
        .send({ characteristic1: 'nameStyle', characteristic2: 'typeOfName' })
        .expect(200)
        .then((res) => {
          expect(res.body).to.have.property('industry');
          expect(res.body).to.have.property('nameStyle');
          expect(res.body).to.have.property('typeOfName');
          done();
        })
        .catch((err) => done(err));
    });
    it('response should be 200, setting Authorization token, sending body request a object { "characteristic1":"typeOfTagline" }, should return a object with property { typeOfTagline, industry }', (done) => {
      request(app)
        .post('/dataForContest')
        .set('Authorization', TOKEN)
        .send({ characteristic1: 'typeOfTagline' })
        .expect(200)
        .then(res => {
          expect(res.body).to.have.property('typeOfTagline');
          expect(res.body).to.have.property('industry');
          done();
        })
        .catch((err) => done(err));
    });
    it('response should be 200, setting Authorization token, body request don`t sending, response should be a object with property { industry }', (done) => {
      request(app)
        .post('/dataForContest')
        .set('Authorization', TOKEN)
        .expect(200)
        .then(res => {
          expect(res.body).to.have.property('industry');
          done();
        })
        .catch((err) => done(err));
    });
    it('response should be 408, without setting, without body request, should return message error "need token"', (done) => {
      request(app)
        .post('/dataForContest')
        .expect(408)
        .expect('need token')
        .end(done);
    });
  });
});
