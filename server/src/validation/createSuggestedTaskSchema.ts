import { z } from 'zod';

export const createSuggestedTaskSchema = z.object({
  name: z.string().min(1, 'Name is required'),
});
