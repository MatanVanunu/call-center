import prisma from '../prisma/client';
import { Router } from 'express';
import { validate } from '../middleware/validate';
import { createCallSchema } from '../validation/createCallSchema';
import { tagCallSchema } from '../validation/tagCallSchema';

const router = Router();

router.post('', validate(createCallSchema), async (req, res) => {
  const { name } = req.body;

  try {
    const call = await prisma.call.create({
      data: {
        name,
        createdAt: new Date(),
      },
    });

    res.status(201).send(call);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to create call' });
  }
});

router.get('', async (req, res) => {
  try {
    const calls = await prisma.call.findMany();

    res.send(calls);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.get('/:callId', async (req, res) => {
  try {
    const { callId } = req.params;

    const call = await prisma.call.findUnique({
      where: { id: callId },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
    if (!call) {
      res.status(404).send({ error: 'Call not found' });
      return;
    }

    res.send(call);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to get call' });
  }
});

router.post('/:callId/tag', validate(tagCallSchema), async (req, res) => {
  try {
    const { tagId } = req.body;
    const { callId } = req.params;

    const call = await prisma.call.findUnique({
      where: { id: callId },
    });

    if (!call) {
      res.status(404).send({ error: 'Call not found' });
      return;
    }

    const tag = await prisma.tag.findUnique({
      where: { id: tagId },
    });

    if (!tag) {
      res.status(404).send({ error: 'Tag not found' });
      return;
    }

    const existing = await prisma.callTag.findUnique({
      where: { callId_tagId: { callId, tagId } },
    });

    if (existing) {
      res.status(204).send();
      return;
    }

    await prisma.callTag.create({
      data: { callId, tagId },
    });

    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to tag call' });
  }
});

router.delete('/:callId/tag/:tagId', async (req, res) => {
  try {
    const { callId, tagId } = req.params;

    const call = await prisma.call.findUnique({ where: { id: callId } });
    if (!call) {
      res.status(404).send({ error: 'Call not found' });
      return;
    }

    const existing = await prisma.callTag.findUnique({
      where: { callId_tagId: { callId, tagId } },
    });

    if (!existing) {
      res.status(204).send();
      return;
    }

    await prisma.callTag.delete({
      where: { callId_tagId: { callId, tagId } },
    });

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Failed to remove tag' });
  }
});
export default router;
