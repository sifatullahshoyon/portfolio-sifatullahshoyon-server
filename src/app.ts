import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import projectRouter from './app/modules/projects/projects.route';

const app: Application = express();

// middleware
app.use(express.json());
// app.use(cookieParser());
app.use(
  cors({
    origin: [
      // 'https://hand-two-hand-backend.vercel.app',
      'http://localhost:3000',
      // 'https://hand-to-hand-frontend.vercel.app',
    ],
    credentials: true,
  }),
);

//* ========================== Application Routes Start ===================

// Auth
// app.use('/api/auth', authRouter);

// Projects
app.use('/api/project', projectRouter);

//* ========================== Application Routes End ===================

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Sifat Ullah Shoyon Portfolio Server is Live⚡',
  });
});

//! Global Error Handler
app.use(globalErrorHandler);

//! not found route

// app.use('*', (req: Request, res: Response) => {
//   res.status(StatusCodes.NOT_FOUND).json({
//     success: false,
//     message: 'Route is not found',
//   });
// });

export default app;
