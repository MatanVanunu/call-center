import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('API is running');
});

export default app;
