import { z } from 'zod';

export const tagSuggestedTaskSchema = z.object({
  tagId: z.string().regex(/^c[a-z0-9]{24}$/),
});
