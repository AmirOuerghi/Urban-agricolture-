-- -----------------------------------------------------
-- Schema dbfarm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbfarm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `dbfarm` ;

-- -----------------------------------------------------
-- Table `dbfarm`.`farmequipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbfarm`.`farmequipment` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100) NOT NULL,
  `Type` VARCHAR(45) NOT NULL,
  `ImageURL` VARCHAR(1000) NOT NULL,
  `Description` VARCHAR(4005) NOT NULL,
  `Size` VARCHAR(45) NOT NULL,
  `Dimensions` VARCHAR(500) NOT NULL,
  `Capacity` VARCHAR(450) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB AUTO_INCREMENT = 22 DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `dbfarm`.`plants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbfarm`.`plants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `img` VARCHAR(1000) NOT NULL,
  `Name` VARCHAR(1000) NOT NULL,
  `Size` VARCHAR(500) NOT NULL,
  `Price` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 25 DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `dbfarm`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbfarm`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `dbfarm`.`profile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbfarm`.`profile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `phone_number` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_profile_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
