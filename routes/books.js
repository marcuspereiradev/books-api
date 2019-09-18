import BooksController from '../controllers/books';

export default (app) => {
  const booksController = new BooksController(app.datasource.models.Books);

  app.get('/books', (req, res) => {
    booksController.getAll()
      .then(response => {
        res.status(response.statusCode);
        res.json(response.data);
      });
  });

  app.get('/books/:id', (req, res) => {
    booksController.getById(req.params)
      .then(response => {
        res.status(response.statusCode);
        res.json(response.data);
      });
  });

  app.post('/books', (req, res) => {
    booksController.create(req.body)
      .then(response => {
        res.status(response.statusCode);
        res.json(response.data);
      });
  });

  app.put('/books/:id', (req, res) => {
    booksController.update(req.body, req.params)
      .then(response => {
        res.status(response.statusCode);
        res.json(response.data);
      });
  });

  app.delete('/books/:id', (req, res) => {
    booksController.delete(req.params)
      .then(response => {
        res.sendStatus(response.statusCode);
      });
  });
};
