import express from 'express';
import { sum } from './example/sum';

const app = express();

app.get('/endpoint', function (req, res) {
  const added = sum(1, 2);
  res.send(`hello world: ${added}`);
});

app.listen(3000);
