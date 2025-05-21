import prisma from '../prisma/client';
import { Request, Response, Router } from 'express';
import { validate } from '../middleware/validate';
import { createTaskSchema } from '../validation/createTaskSchema';
import { updateTaskSchema } from '../validation/updateTaskSchema';
import { fromSuggestionSchema } from '../validation/fromSuggestionSchema';

const router = Router({ mergeParams: true });

router.get('', async (req: Request<{ callId: string }>, res: Response) => {
  try {
    const { callId } = req.params;

    const tasks = await prisma.task.findMany({
      where: { callId },
    });

    res.send(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to get tasks' });
  }
});

router.post('', validate(createTaskSchema), async (req, res) => {
  try {
    const { callId } = req.params;
    const { name } = req.body;

    const call = await prisma.call.findUnique({ where: { id: callId } });

    if (!call) {
      res.status(404).send({ error: 'Call not found' });
      return;
    }

    const task = await prisma.task.create({
      data: {
        callId,
        name,
      },
    });

    res.status(201).send(task);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to create task' });
  }
});

router.patch('/:taskId', validate(updateTaskSchema), async (req, res) => {
  try {
    const { callId, taskId } = req.params;
    const { status } = req.body;

    const task = await prisma.task.findUnique({ where: { id: taskId } });

    if (!task || task.callId !== callId) {
      res.status(404).send({ error: 'Task not found for this call' });
      return;
    }

    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: { status },
    });

    res.send(updatedTask);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to update task' });
  }
});

router.post(
  '/from-suggestion',
  validate(fromSuggestionSchema),
  async (req, res) => {
    try {
      const { callId } = req.params;
      const { suggestedTaskId } = req.body;

      const [call, suggestedTask] = await Promise.all([
        prisma.call.findUnique({ where: { id: callId } }),
        prisma.suggestedTask.findUnique({ where: { id: suggestedTaskId } }),
      ]);

      if (!call || !suggestedTask) {
        res.status(404).json({ error: 'Call or Suggested Task not found' });
        return;
      }

      const newTask = await prisma.task.create({
        data: {
          name: suggestedTask.name,
          callId,
          suggestedTaskId,
        },
      });

      res.status(201).json(newTask);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Failed to create task' });
    }
  }
);

export default router;
