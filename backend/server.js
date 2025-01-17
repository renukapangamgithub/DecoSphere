import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import 'dotenv/config';
import authRouter from './routes/authRoute.js';
import contactRouter from './routes/contactRoute.js'; 

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());

app.use(cors({
  origin: 'https://decosphere-frontend1.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


connectDB();


app.use('/api/auth', authRouter);  
app.use('/api', contactRouter);   

app.get('/', (req, res) => {
  res.send('API is working');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
