/*
  Warnings:

  - The `hasCertification` column on the `Explorer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Explorer" ALTER COLUMN "enrollments" DROP DEFAULT,
ALTER COLUMN "enrollments" SET DATA TYPE VARCHAR(255),
DROP COLUMN "hasCertification",
ADD COLUMN     "hasCertification" BOOLEAN NOT NULL DEFAULT false;
