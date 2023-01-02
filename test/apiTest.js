import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public/v2/');
import { expect } from 'chai';

const TOKEN = 'cc0d3cbfe5dc4de0dbd82ccc40863660b7274be4de93bdaecac5b0f0b9dbbe4a';

describe('users', () => {
    it('users /GET', (done) => {
        request.get(`users?access-token=${TOKEN}`).end((err, res) => {
            // console.log(err);
            // console.log(res.body);
            done();
        })
    });


    it('users /GET', () => {
        console.log("request is: ", +request);
        return request.get(`users?access-token=${TOKEN}`).then((res) => {
            //console.log(res.body);
            expect(res.body).to.not.be.empty;

        })
    });

    it('users /GET', () => {
        return request.get(`users/3419?access-token=${TOKEN}`).then((res) => {
            // console.log(res.body);
            expect(res.body).to.not.be.empty;

        })
    });

    it('users /GET', () => {
        return request.get(`users/3419?access-token=${TOKEN}`).then((res) => {
            // console.log(res.body);
            expect(res.body.id).to.be.equal(3419)

        })
    });

    it('users /GET with filters', () => {
        const url = `users?access-token=${TOKEN}&gender=female&status=active`
        return request.get(url).then((res) => {
            // console.log(res.body);
            expect(res.body).to.not.be.empty;
        })
    });

    it('users /GET with filters', () => {
        const url = `users?access-token=${TOKEN}&gender=female&status=active`
        return request.get(url).then((res) => {
            console.log(res.body);
            expect(res.body).to.not.be.empty;
            res.body.forEach((body) => {
                expect(body.gender).to.be.eq('female');
                expect(body.status).to.be.eq('active');
            });
        })
    });

    it('POST request', () => {
        const data = {
            email: `test-${Math.floor(Math.random() * 9999)}@gmail.com`,
            name: 'test',
            gender: 'male',
            status: 'active',
        };
        return request.post('users').set('Authorization', `Bearer ${TOKEN}`).send(data).then((res) => {
            console.log(res.body);
            expect(res.body.email).to.be.eq(data.email);
            expect(res.body.gender).to.be.eq(data.gender);
            expect(res.body).to.deep.include(data);
        })

    });

    it('POST request-1', () => {
        const data = {
            email: `test-${Math.floor(Math.random() * 9999)}@gmail.com`,
            name: 'test',
            gender: 'male',
            status: 'active',
        };
        return request
            .post('users')
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(data)
            .then((res) => {
                console.log(res.body);
                data.gender = 'female',
                    data.email = 'test55@gmail.com'
                expect(res.body.email).to.be.eq(data.email); //it will fail as email is changed on line no.87
                expect(res.body.gender).to.be.eq(data.gender);

            })



    });

    it('PUT request', () => {
        const data = {
            name: `Lucky-${Math.floor(Math.random() * 9999)}`,
            status: "Inactive"
        }
        return request
            .put('users/2901')
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(data)
            .then((res) => {
                console.log(res.body);
                expect(res.body.status).to.not.be.eq('active')
            })
    });

    it('DELETE request', () => {
        return request
            .delete('users/9490')
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                console.log(res.body);
            })
    });
});  