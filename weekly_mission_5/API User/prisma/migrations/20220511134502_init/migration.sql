-- CreateTable
CREATE TABLE "Explorer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" BOOLEAN NOT NULL DEFAULT false,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Explorer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Explorer_name_key" ON "Explorer"("name");
