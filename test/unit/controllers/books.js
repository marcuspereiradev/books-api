import BooksController from '../../../controllers/books';

describe('Controllers: Book', () => {
  describe('Get all books: getAll()', () => {
    it('should return a list of books', () => {
      const Books = {
        findAll: td.function()
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2019-09-16T15:05:36.6922',
        updated_at: '2019-09-16T15:05:36.6922',
      }];

      td.when(Books.findAll({})).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.getAll()
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Get book by id: getById  ()', () => {
    it('should return a books', () => {
      const Books = {
        findOne: td.function()
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2019-09-16T15:05:36.6922',
        updated_at: '2019-09-16T15:05:36.6922',
      }];

      td.when(Books.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.getById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Create a book: create()', () => {
    it('should return a list of books', () => {
      const Books = {
        create: td.function()
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2019-09-16T15:05:36.6922',
        updated_at: '2019-09-16T15:05:36.6922',
      }];

      const requestBody = {
        name: 'Test Book'
      };

      td.when(Books.create(requestBody)).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.create(requestBody)
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });
});
