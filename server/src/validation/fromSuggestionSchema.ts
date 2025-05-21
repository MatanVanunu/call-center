import { z } from 'zod';

export const fromSuggestionSchema = z.object({
  suggestedTaskId: z.string().cuid(),
});
