import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;
