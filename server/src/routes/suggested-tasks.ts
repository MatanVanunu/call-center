import { Router } from 'express';
import { validate } from '../middleware/validate';
import { createSuggestedTaskSchema } from '../validation/createSuggestedTaskSchema';
import prisma from '../prisma/client';
import { tagSuggestedTaskSchema } from '../validation/tagSuggestedTaskSchema';
import { getSuggestedTasks } from '../services/suggested-task';

const router = Router();

router.get('', async (req, res) => {
  try {
    const { callId } = req.query;

    const suggestedTasks = await getSuggestedTasks(
      (callId as string) || undefined
    );

    res.send(suggestedTasks);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to get suggested task' });
  }
});

router.post('', validate(createSuggestedTaskSchema), async (req, res) => {
  try {
    const { name } = req.body;

    const suggestedTask = await prisma.suggestedTask.create({
      data: {
        name,
      },
    });

    res.status(201).send(suggestedTask);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to create suggested task' });
  }
});

router.patch('/:id', validate(createSuggestedTaskSchema), async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const suggestedTask = await prisma.suggestedTask.findUnique({
      where: { id },
    });
    if (!suggestedTask) {
      res.status(404).send({ error: 'Suggested task not found' });
      return;
    }

    const updatedSuggestedTask = await prisma.suggestedTask.update({
      where: { id },
      data: { name },
    });

    res.send(updatedSuggestedTask);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to update suggested task' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const suggestedTask = await prisma.suggestedTask.findUnique({
      where: { id },
    });

    if (!suggestedTask) {
      res.status(404).send({ error: 'Suggested task not found' });
      return;
    }

    await prisma.suggestedTask.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.post('/:id/tag', validate(tagSuggestedTaskSchema), async (req, res) => {
  try {
    const { id } = req.params;
    const { tagId } = req.body;

    const suggestedTask = await prisma.suggestedTask.findUnique({
      where: { id },
    });
    if (!suggestedTask) {
      res.status(404).send({ error: 'Suggested task not found' });
      return;
    }

    const tag = await prisma.tag.findUnique({
      where: { id: tagId },
    });

    if (!tag) {
      res.status(404).send({ error: 'Tag not found' });
      return;
    }

    const existing = await prisma.suggestedTaskTag.findUnique({
      where: { suggestedTaskId_tagId: { suggestedTaskId: id, tagId } },
    });

    if (existing) {
      res.status(204).send();
      return;
    }

    await prisma.suggestedTaskTag.create({
      data: {
        suggestedTaskId: id,
        tagId,
      },
    });

    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to tag suggested task' });
  }
});

router.delete('/:id/tag/:tagId', async (req, res) => {
  try {
    const { id, tagId } = req.params;

    const relation = await prisma.suggestedTaskTag.findUnique({
      where: { suggestedTaskId_tagId: { suggestedTaskId: id, tagId } },
    });

    if (!relation) {
      res
        .status(404)
        .send({ error: 'Suggested task not tagged with given tag' });
      return;
    }

    await prisma.suggestedTaskTag.delete({
      where: { suggestedTaskId_tagId: { suggestedTaskId: id, tagId } },
    });

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to untag suggested task' });
  }
});

export default router;
