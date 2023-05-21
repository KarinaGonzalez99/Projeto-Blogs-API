const express = require('express');
const loginRouter = require('./router/login'); // requisito 3
const userRouter = require('./router/user'); // requisito 4
const categoryRouter = require('./router/category'); // requisito 8

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter); // requisito 3
app.use('/user', userRouter); // requisito 4
app.use('/categories', categoryRouter); // requisito 8

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
