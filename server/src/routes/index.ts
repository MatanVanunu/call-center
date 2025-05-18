import { Router } from 'express';
import callsRouter from './calls';
import tagsRouter from './tags';

const router = Router();

router.use('/calls', callsRouter);
router.use('/tags', tagsRouter);

export default router;
