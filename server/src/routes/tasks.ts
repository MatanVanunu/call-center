import prisma from '../prisma/client';
import { Request, Response, Router } from 'express';
import { validate } from '../middleware/validate';
import { createTaskSchema } from '../validation/createTaskSchema';
import { updateTaskSchema } from '../validation/updateTaskSchema';

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
    const { name, suggestedTaskId } = req.body;

    const call = await prisma.call.findUnique({ where: { id: callId } });

    if (!call) {
      res.status(404).send({ error: 'Call not found' });
      return;
    }

    if (suggestedTaskId) {
      const suggestedTask = await prisma.suggestedTask.findUnique({
        where: { id: suggestedTaskId },
      });
      if (!suggestedTask) {
        res.status(404).send({ error: 'Suggested task not found' });
        return;
      }
    }

    const task = await prisma.task.create({
      data: {
        callId,
        name,
        suggestedTaskId,
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

export default router;
