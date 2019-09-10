import express from 'express';

const app = express();

app.get('/books', (req, res) => {
  return res.status(200).json([{
    id: 1,
    name: 'Default Book'
  }]);
})

export default app;
