import { z } from 'zod';

export const createCallSchema = z.object({
  name: z.string().min(2, 'Name is required'),
});
