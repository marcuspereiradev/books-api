import BooksController from '../controllers/books';

export default (app, Books) => {
  app.get('/books', (req, res) => {
    Books.findAll({})
      .then((result) => res.json(result))
      .catch(() => res.status(412));
  });
  
  app.get('/books/:id', (req, res) => {
    Books.findOne({ where: req.params })
      .then((result) => res.json(result))
      .catch(() => res.status(412));
  });
  
  app.post('/books', (req, res) => {
    Books.create(req.body)
      .then((result) => res.json(result))
      .catch(() => res.status(412));
  });
  
  app.put('/books/:id', (req, res) => {
    Books.update(req.boby, { where: req.params })
      .then((result) => res.json(result))
      .catch(() => res.status(412));
  });
  
  app.delete('/books/:id', (req, res) => {
    Books.destroy({ where: req.params })
      .then(() => res.sendStatus(204))
      .catch(() => res.status(412));
  });
}
