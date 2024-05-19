import app from './src/app.js';
//require('dotenv').config();
import cors from 'cors';

const port = process.env.PORT || 3001;

// Habilitar CORS para todas las rutas y orígenes
app.use(cors());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
