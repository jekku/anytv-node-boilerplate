'use strict';

const cwd     = process.cwd();
const should  = require('chai').should();
const request = require('supertest');
const config  = require(`${cwd}/config/config`);
let api;

require(`${cwd}/server`);
api = request('http://localhost:' + config.PORT);


describe('User', () => {
    it('should get one user', (done) => {
        api.get('/user/cf9fcb1f-8fea-499a-b58f-c69576a11cd5')
            .expect(200)
            .end((err) => {
                should.not.exist(err);
                done();
            });
    });
});
