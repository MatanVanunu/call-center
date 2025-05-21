import { Router } from 'express';
import { validate } from '../middleware/validate';
import { createTagSchema } from '../validation/createTagSchema';
import prisma from '../prisma/client';

const router = Router();

router.post('', validate(createTagSchema), async (req, res) => {
  try {
    const { name } = req.body;

    const tag = await prisma.tag.create({
      data: {
        name,
      },
    });

    res.status(201).send(tag);
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: 'Failed to create tag' });
  }
});

router.get('', async (req, res) => {
  try {
    const tags = await prisma.tag.findMany();

    res.send(tags);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.patch('/:tagId', validate(createTagSchema), async (req, res) => {
  try {
    const { tagId } = req.params;

    const tag = await prisma.tag.findUnique({
      where: { id: tagId },
    });

    if (!tag) {
      res.status(404).send();
      return;
    }

    const updatedTag = await prisma.tag.update({
      where: { id: tagId },
      data: { ...req.body },
    });

    res.send(updatedTag);
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: 'Failed to update tag' });
  }
});

router.delete('/:tagId', async (req, res) => {
  try {
    const { tagId } = req.params;

    const tag = await prisma.tag.findUnique({
      where: { id: tagId },
    });

    if (!tag) {
      res.status(404).send();
      return;
    }

    await prisma.tag.delete({
      where: { id: tagId },
    });

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: 'Failed to update tag' });
  }
});

export default router;
