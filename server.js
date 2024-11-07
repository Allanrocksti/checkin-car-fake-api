const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // seu arquivo db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.post('/login', (req, res) => {
    res.json({
        token: 'seu-token-aqui'
    });
});

server.get('/reset-password', (req, res) => {
    res.json({
        enviado: true
    })
})

server.get('/checklist', (req, res) => {
    res.json(["Item 1", "Item 2", "Item 3", "Item 4"])
})

server.use(router);
server.listen(3000, () => {
    console.log('JSON Server está rodando na porta 3000');
});