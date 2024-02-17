/*
  Warnings:

  - You are about to drop the column `thumbnailPath` on the `Videos` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Thumbnail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "thumbnailPath" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Videos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "videoPath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Videos" ("createdAt", "description", "hash", "id", "title", "videoPath") SELECT "createdAt", "description", "hash", "id", "title", "videoPath" FROM "Videos";
DROP TABLE "Videos";
ALTER TABLE "new_Videos" RENAME TO "Videos";
CREATE UNIQUE INDEX "Videos_hash_key" ON "Videos"("hash");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Thumbnail_hash_key" ON "Thumbnail"("hash");
