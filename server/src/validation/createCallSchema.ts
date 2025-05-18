import { z } from 'zod';

export const createCallSchema = z.object({
  name: z.string().min(1, 'Name is required'),
});
