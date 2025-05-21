import type { Tag } from '../../tags/types/tags';

export interface SuggectedTask {
  id: string;
  name: string;
  tags: Tag[];
}

export interface CreateSuggestedTaskInput {
  name: string;
}

export interface TagSuggestedTaskInput {
  suggestedTaskId: string;
  tagId: string;
}

export type UnTagSuggestedTaskInput = TagSuggestedTaskInput;
