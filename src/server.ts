import exppress from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = exppress();

app.use(cors());
app.use(exppress.json());
app.use(routes);

app.use('/uploads', exppress.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333);