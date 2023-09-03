import express from 'express';
const app = express();
import cors from 'cors';
import animalsRoute from './Routes/animals.route.js';
import ownersRoute from './Routes/owners.route.js';

const port = 3333;
app.use(cors());
app.use(express.json());

app.use('/owners', ownersRoute);
app.use('/animals', animalsRoute);

app.listen(3333, () => console.log(`⚡🚪 Backend started at http://localhost:${port}`));