import express, { Express, Request, Response } from 'express';
import notes from './routes/notes';

const app: Express = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(express.json());

//Mount Routers
app.use('/api/v1/notes', notes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
