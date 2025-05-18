import prismaClient from '../prisma/client';
import { Router } from 'express';
import { validate } from '../middleware/validate';
import { createCallSchema } from '../validation/createCallSchema';

const router = Router();

router.post('', validate(createCallSchema), async (req, res) => {
  const { name } = req.body;

  try {
    const call = await prismaClient.call.create({
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
    const calls = await prismaClient.call.findMany();

    res.send(calls);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});
export default router;
