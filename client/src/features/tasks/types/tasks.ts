export interface Task {
  id: string;
  name: string;
  createAt: Date;
  callId: string;
  suggestedTaskId: string | null;
}
