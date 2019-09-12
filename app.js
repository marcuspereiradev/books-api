import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.use(bodyParser.json());

const Books = app.datasource.models.Books;

app.get('/books', (req, res) => {
  Books.findAll({})
    .then(result => res.json(result))
    .catch(err => res.status(412));
});

app.get('/books/:id', (req, res) => {
  Books.findOne({ where: req.params })
    .then(result => res.json(result))
    .catch(err => res.status(412));
});

app.post('/books', (req, res) => {
  Books.create({ where: req.body })
    .then(result => res.json(result))
    .catch(err => res.status(412));
});

app.put('/books/:id', (req, res) => {
  Books.update(req.boby, { where: req.params })
    .then(result => res.json(result))
    .catch(err => res.status(412));
});

app.delete('/books/:id', (req, res) => {
  Books.destroy({ where: req.params })
    .then(result => res.sendStatus(204))
    .catch(err => res.status(412));
});

export default app;
