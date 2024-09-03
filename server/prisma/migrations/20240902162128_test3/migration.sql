/*
  Warnings:

  - You are about to drop the column `Amount_needed` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `Amount_raised` on the `projects` table. All the data in the column will be lost.
  - Added the required column `amount_needed` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `projects` DROP COLUMN `Amount_needed`,
    DROP COLUMN `Amount_raised`,
    ADD COLUMN `amount_needed` INTEGER NOT NULL,
    ADD COLUMN `amount_raised` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `rewards_claimed` ADD COLUMN `date_claimed` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
