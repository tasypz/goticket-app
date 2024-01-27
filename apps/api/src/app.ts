import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import eventRouter from './routers/sample.router';

const app = express();
const port = 3001;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(bodyParser.json());

app.use('/api', eventRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
