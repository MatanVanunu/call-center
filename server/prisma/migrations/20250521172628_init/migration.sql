-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "Call" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Call_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CallTag" (
    "callId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "CallTag_pkey" PRIMARY KEY ("callId","tagId")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "TaskStatus" NOT NULL DEFAULT 'OPEN',
    "callId" TEXT NOT NULL,
    "suggestedTaskId" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuggestedTask" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SuggestedTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuggestedTaskTag" (
    "suggestedTaskId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "SuggestedTaskTag_pkey" PRIMARY KEY ("suggestedTaskId","tagId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SuggestedTask_name_key" ON "SuggestedTask"("name");

-- AddForeignKey
ALTER TABLE "CallTag" ADD CONSTRAINT "CallTag_callId_fkey" FOREIGN KEY ("callId") REFERENCES "Call"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallTag" ADD CONSTRAINT "CallTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_callId_fkey" FOREIGN KEY ("callId") REFERENCES "Call"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_suggestedTaskId_fkey" FOREIGN KEY ("suggestedTaskId") REFERENCES "SuggestedTask"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuggestedTaskTag" ADD CONSTRAINT "SuggestedTaskTag_suggestedTaskId_fkey" FOREIGN KEY ("suggestedTaskId") REFERENCES "SuggestedTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuggestedTaskTag" ADD CONSTRAINT "SuggestedTaskTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
