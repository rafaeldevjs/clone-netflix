import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './src/routes/filmes.routes.js';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(3002, () => {
  console.log('servidor rodando!');
});
