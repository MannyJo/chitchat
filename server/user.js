const users = [];

const getUser = id => users.find(user => user.id === id);

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find(user => user.name === name && user.room === room);

    if(existingUser) return { error: 'Name is already taken!' };
    if(!name || !room) return { error: 'Name and Room are required!' };

    const user = { id, name, room };
    users.push(user);

    return { user };
}

module.exports = {
    getUser,
    addUser,
};