const app = require('./index');

const request = require('supertest');

describe('Root Test', () => {
  it('should return 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done)
      .expect('Content-Type', /json/)
      .expect({ sucess: true, message: 'Hello World!' });
  });
});
