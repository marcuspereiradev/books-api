import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import BooksRouter from './routes/books';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.use(bodyParser.json());
const { Books } = app.datasource.models;
BooksRouter(app, Books);

export default app;
