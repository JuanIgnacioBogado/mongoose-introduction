require('./connection');

const User = require('./models/User');

async function createUsers() {
    const userOne = new User({
        username: 'dona',
        password: '12345'
    });
    await userOne.save();

    const userTwo = new User({
        username: 'cameron',
        password: 'securePassword'
    });
    await userTwo.save();
}

createUsers();