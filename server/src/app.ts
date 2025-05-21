import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const allowedOrigins = [process.env.CLIENT_ORIGIN];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
  })
);

app.use(bodyParser.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('API is running');
});

export default app;
