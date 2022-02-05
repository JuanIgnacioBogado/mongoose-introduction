require('../connection');

const User = require('../models/User');

const findAndUpdate = async () => {
    const user = await User.findOneAndUpdate({username: 'clark'}, {
        name: 'Gordon Clark'
    }, {new: true});
    console.log(user);
}

async function updateUser() {
    const user = await User.updateOne({username: 'fazt'}, {
        password: 'contraseñasegura'
    });
    console.log(user);
}

findAndUpdate();