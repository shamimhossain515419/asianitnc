/*
  Warnings:

  - You are about to alter the column `total` on the `short_portfolio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `short_portfolio` MODIFY `total` INTEGER NOT NULL;
