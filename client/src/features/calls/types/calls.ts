import type { Tag } from '../../tags/types/tags';

export interface CallSummary {
  id: string;
  name: string;
  createAt: Date;
}

export interface Call extends CallSummary {
  tags: Tag[];
}

export interface CreateCallInput {
  name: string;
}

export interface TagCallInput {
  callId: string;
  tagId: string;
}

export type UnTagCallInput = TagCallInput;
