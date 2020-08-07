import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

// Avisa o node para usar json
app.use(express.json());
app.use(cors())
app.use(routes);



app.listen(3333);

