const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
const should = chai.should();
const Charities = require('../models/reviews');

const sampleCharity= {
    "donations": "233"
}

chai.use(chaiHttp);

describe('Reviews', () => {

    // TEST INDEX
    it('should index ALL charities on / GET', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(404);
                res.should.be.html;
                done();
            });
    });


    // TEST SHOW
    it('should show a SINGLE charity on /charities/<id> GET', (done) => {
        var Charity = new Charity(sampleCharity);
        review.save((err, data) => {
            chai.request(server)
                .get('/charities/${data._id}')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
        });
    });

    // TEST EDIT
    it('should get from /charities/<id>/edit GET', (done) => {
        var review = new Charity(sampleCharity);
        review.save((err, data) => {
            chai.request(server)
                .get(`/reviews/${data._id}/edit`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
        });
    });

    // TEST CREATE
    it('should create a SINGLE donation on /charities/<id>', (done) => {
        chai.request(server)
            .post('/charities-show')
            .send(sampleCharity)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html
                done();
            });
    });

    // TEST DELETE
    it('should delete a SINGLE donation on /charities/<id> DELETE', (done) => {
        var Charity = new Review(sampleCharity);
        Charity.save((err, data) => {
            chai.request(server)
                .delete(`/charities/${data._id}?_method=DELETE`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
        });
    });
});
