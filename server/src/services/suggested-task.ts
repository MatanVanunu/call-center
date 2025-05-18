import prisma from '../prisma/client';

export const getSuggestedTasks = async (callId?: string) => {
  const where = callId
    ? {
        tags: {
          some: {
            tag: {
              callTags: {
                some: {
                  callId,
                },
              },
            },
          },
        },
        tasks: {
          none: {
            callId,
          },
        },
      }
    : {};

  const tasks = await prisma.suggestedTask.findMany({
    where,
    include: {
      tags: true,
    },
  });

  return tasks.map((task) => ({
    id: task.id,
    name: task.name,
    tags: task.tags.map((t) => t.tagId),
  }));
};
