import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import connectDB from './src/config/db.js';
import morganMiddleware from './src/middlewares/morgan.middleware.js';

import authRoutes from './src/routes/auth.routes.js';
import taskRoutes from './src/routes/task.routes.js';
import errorHandler from './src/middlewares/error.middleware.js';
import logger from './src/config/logger.js';

const app = express();

// Test Routes
app.get('/', (req, res) => {
  res.send('API is Running.......');
});

// Core middlewares
app.use(cors());
app.use(express.json());

// Logging middlewares
app.use(morganMiddleware);
//routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Error handling
app.use(errorHandler);

// start
connectDB();

// Start server

const PORT = process.env.PORT || 5000;

app.listen(PORT,"0.0.0.0", () => logger.info(`✔ Server running on port ${PORT}`));
