import { Router } from 'express';
import { getExchangeRates } from '../controllers/DolarInfo.js';

const router = Router();

router.get("/dolar", getExchangeRates);

export default router;
