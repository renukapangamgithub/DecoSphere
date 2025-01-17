// server.js
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import 'dotenv/config';
import authRouter from './routes/authRoute.js';
import contactRouter from './routes/contactRoute.js';  // Import the contact route

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Change this to your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


// Connect to the database
connectDB();

// Register routes
app.use('/api/auth', authRouter);  // Auth routes
app.use('/api', contactRouter);    // Contact routes

app.get('/', (req, res) => {
  res.send('API is working');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
