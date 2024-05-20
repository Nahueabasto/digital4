import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dolarRoutes from './routes/getDolar.js';
import NoticiasAr from './routes/getNoticias.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser('your-secret-key', { sameSite: 'None', secure: true }));

// Configuración de CORS
app.use(cors({
  origin: ["http://localhost:5173", "https://digital4.vercel.app"],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

// Usar rutas
app.use('/', dolarRoutes);
app.use('/', NoticiasAr);

export default app;

