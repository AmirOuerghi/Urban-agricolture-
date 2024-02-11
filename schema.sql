-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dbfarm
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbfarm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbfarm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `dbfarm` ;

-- -----------------------------------------------------
-- Table `dbfarm`.`articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbfarm`.`articles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `img` VARCHAR(1000) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbfarm`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbfarm`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbfarm`.`plants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbfarm`.`plants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `img` VARCHAR(1000) NOT NULL,
  `Name` VARCHAR(1000) NOT NULL,
  `Size` VARCHAR(500) NOT NULL,
  `Price` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 28
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbfarm`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbfarm`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
