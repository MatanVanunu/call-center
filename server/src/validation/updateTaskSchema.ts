import { TaskStatus } from '@prisma/client';
import { z } from 'zod';

export const updateTaskSchema = z.object({
  status: z.nativeEnum(TaskStatus),
});
