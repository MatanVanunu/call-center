import { Router } from 'express';
import callsRouter from './calls';
import tagsRouter from './tags';
import tasksRouter from './tasks';
import suggestedTasksRouter from './suggested-tasks';

const router = Router();

router.use('/calls', callsRouter);
router.use('/tags', tagsRouter);
router.use('/calls/:callId/tasks', tasksRouter);
router.use('/suggested-tasks', suggestedTasksRouter);

export default router;
