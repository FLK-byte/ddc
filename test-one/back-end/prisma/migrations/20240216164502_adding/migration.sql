/*
  Warnings:

  - Added the required column `hash` to the `Videos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Videos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "videoPath" TEXT NOT NULL,
    "thumbnailPath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Videos" ("createdAt", "description", "id", "thumbnailPath", "title", "videoPath") SELECT "createdAt", "description", "id", "thumbnailPath", "title", "videoPath" FROM "Videos";
DROP TABLE "Videos";
ALTER TABLE "new_Videos" RENAME TO "Videos";
CREATE UNIQUE INDEX "Videos_hash_key" ON "Videos"("hash");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
