const request = require('supertest');
const app = require('../src/app');
const User = require('../src/user/User');
const sequelize = require('../src/config/database');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

beforeEach(async () => {
    await User.destroy({ truncate: true });
})



describe('User registeration', () => {

    it('returns 200 when the signup request is valid', async () => {
        const response = await request(app)
            .post('/api/v1/users')
            .send({
                username: 'user1',
                email: 'user1@gmail.com',
                password: 'password'
            })
        await expect(response.statusCode).toBe(200);
    });

    it('returns success message when signup request is valid', async () => {
        const response = await request(app)
            .post('/api/v1/users')
            .send({
                username: 'user1',
                email: 'user1@gmail.com',
                password: 'password'
            })
        await expect(response.body.message).toBe('User created');
    });

    it("saves user to database", async () => {
        const response = await request(app)
            .post('/api/v1/users')
            .send({
                username: 'user1',
                email: 'user1@gmail.com',
                password: 'password'
            })
        //query the database
       const user = await User.findAll({
            where: {
                username: 'user1'
            }
        })
        expect(user).toHaveLength(1);
    });

    it('saves the username and email', async () => {
        const response = await request(app)
            .post('/api/v1/users')
            .send({
                username: 'user1',
                email: 'user1@gmail.com',
                password: 'password'
            })
        //query the database
       const user = await User.findAll({
            where: {
                username: 'user1'
            }
        })
        expect(user[0].username).toBe('user1');
        expect(user[0].email).toBe('user1@gmail.com');
    })

    it("hashes the password in database", async () => {
        const response = await request(app)
            .post('/api/v1/users')
            .send({
                username: 'user1',
                email: 'user1@gmail.com',
                password: 'password'
            })
        //query the database
       const user = await User.findAll({
            where: {
                username: 'user1'
            }
        })
        expect(user[0].password).not.toBe('password');
    })
})