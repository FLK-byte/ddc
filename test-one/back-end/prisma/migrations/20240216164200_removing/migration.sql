/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `userId` on the `Videos` table. All the data in the column will be lost.
  - Added the required column `description` to the `Videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Videos` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Videos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "videoPath" TEXT NOT NULL,
    "thumbnailPath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Videos" ("id", "thumbnailPath", "videoPath") SELECT "id", "thumbnailPath", "videoPath" FROM "Videos";
DROP TABLE "Videos";
ALTER TABLE "new_Videos" RENAME TO "Videos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
