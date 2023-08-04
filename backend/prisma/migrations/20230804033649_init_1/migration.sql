-- CreateTable
CREATE TABLE `type_place` (
    `id` VARCHAR(191) NOT NULL,
    `typeName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `place` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `latitude` VARCHAR(191) NOT NULL,
    `longitude` VARCHAR(191) NOT NULL,
    `type_placeId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `place` ADD CONSTRAINT `place_type_placeId_fkey` FOREIGN KEY (`type_placeId`) REFERENCES `type_place`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
