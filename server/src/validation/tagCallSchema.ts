import { z } from 'zod';

export const tagCallSchema = z.object({
  tagId: z.string().regex(/^c[a-z0-9]{24}$/),
});
