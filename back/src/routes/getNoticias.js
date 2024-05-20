import { Router } from 'express';
import { getNoticias } from '../controllers/NoticiasAr.js';

const router = Router();

router.get("/noticias", getNoticias);

export default router;