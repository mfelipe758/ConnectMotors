const jsonServer = require('json-server');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(express.json());
server.use(middlewares);

server.get('/carros', (req, res) => {
  const { modelo, marca, _sort, _order } = req.query;
  let data = router.db.get('carros').value();

  if (modelo) {
    data = data.filter(carro => carro.modelo.toLowerCase().includes(modelo.toLowerCase()));
  }

  // if (marca) {
  //   data = data.filter(carro => carro.marca.toLowerCase() === marca.toLowerCase());
  //   // data = data.filter(carro => carro.marca.toLowerCase().includes(marca.toLowerCase()));

  // }

  if (_sort === 'km') {
    data.sort((a, b) => (_order === 'asc' ? a.km - b.km : b.km - a.km));
  }

  if (_sort === 'valor') {
    data.sort((a, b) => (_order === 'asc' ? a.valor - b.valor : b.valor - a.valor));
  }

  res.json(data);
});

server.get('/users', (req, res) => {
  const users = router.db.get('users').value();
  res.json(users);
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ success: false, message: 'Nome de usuário e senha são obrigatórios!' });
    return;
  }
  
  const users = router.db.get('users').value();
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    res.json({ success: true, redirectUrl: '/reserve' });
  } else {
    res.status(401).json({ success: false, redirectUrl: '/login' });
  }
});

server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});

