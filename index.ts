import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { antaraNewsRouter } from './src/routes/antaraNewsRouter';
import { cnnIndonesiaRouter } from './src/routes/cnnIndonesiaRouter';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

// for parsing application/json
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send(`EL Araya - RSS Feed News API`);
  });

app.use('/antaranews', antaraNewsRouter);
app.use('/cnnindonesia', cnnIndonesiaRouter);
  
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
