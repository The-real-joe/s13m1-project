const server = require('./api/server');

const port = 9000;

// START YOUR SERVER HERE

server.post('/api/users', (req, res) => {
    const { name, bio } = req.body;
    const user = { name, bio };
    res.status(201).send(user);
});

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const user = { id, name: 'John', bio: 'Developer' };
    res.send(user);
});

server.get('/api/users', (req, res) => {
    const users = [{ id: 1, name: 'John', bio: 'Developer' }];
    res.send(users);
});

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, bio } = req.body;
    const user = { id, name, bio };
    res.send(user);
});

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const user = { id, name: 'John', bio: 'Developer' };
    res.send(user);
});




server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
