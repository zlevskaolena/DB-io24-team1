# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

- SQL-скрипт для створення на початкового наповнення бази даних
- RESTfull сервіс для управління даними

## SQL-скрипт для створення на початкового наповнення бази даних

```
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

DROP SCHEMA IF EXISTS `mydb` ;

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

DROP TABLE IF EXISTS `mydb`.`users` ;

CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS `mydb`.`experts` ;

CREATE TABLE IF NOT EXISTS `mydb`.`experts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `job` VARCHAR(45) NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_experts_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_experts_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `survey-db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

DROP TABLE IF EXISTS `mydb`.`quizes` ;

CREATE TABLE IF NOT EXISTS `mydb`.`quizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NULL,
  `expiration_date` DATETIME NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_quiz_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_quiz_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `survey-db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`questions` ;

CREATE TABLE IF NOT EXISTS `mydb`.`questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NOT NULL,
  `type` INT NOT NULL,
  `quiz_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_questions_quiz1_idx` (`quiz_id` ASC) VISIBLE,
  CONSTRAINT `fk_questions_quiz1`
    FOREIGN KEY (`quiz_id`)
    REFERENCES `survey-db`.`quizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`options` ;

CREATE TABLE IF NOT EXISTS `mydb`.`options` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NOT NULL,
  `questions_id` INT NOT NULL,
  `isCorrect` TINYINT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_answers_questions1_idx` (`questions_id` ASC) VISIBLE,
  CONSTRAINT `fk_answers_questions1`
    FOREIGN KEY (`questions_id`)
    REFERENCES `survey-db`.`questions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.` options` ;

CREATE TABLE IF NOT EXISTS `mydb`.` options` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`selected_options` ;

CREATE TABLE IF NOT EXISTS `mydb`.`selected_options` (
  `id` INT NOT NULL AUTO_INCREMENT,
  ` options_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_selected_options_ options1_idx` (` options_id` ASC) VISIBLE,
  CONSTRAINT `fk_selected_options_ options1`
    FOREIGN KEY (` options_id`)
    REFERENCES `survey-db`.` options` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`users_has_quiz` ;

CREATE TABLE IF NOT EXISTS `mydb`.`users_has_quiz` (
  `users_id` INT NOT NULL,
  `quiz_id` INT NOT NULL,
  PRIMARY KEY (`users_id`, `quiz_id`),
  INDEX `fk_users_has_quiz_quiz1_idx` (`quiz_id` ASC) VISIBLE,
  INDEX `fk_users_has_quiz_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_quiz_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `survey-db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_quiz_quiz1`
    FOREIGN KEY (`quiz_id`)
    REFERENCES `survey-db`.`quizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`users_has_quiz1` ;

CREATE TABLE IF NOT EXISTS `mydb`.`users_has_quiz1` (
  `users_id` INT NOT NULL,
  `quiz_id` INT NOT NULL,
  PRIMARY KEY (`users_id`, `quiz_id`),
  INDEX `fk_users_has_quiz1_quiz1_idx` (`quiz_id` ASC) VISIBLE,
  INDEX `fk_users_has_quiz1_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_quiz1_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `survey-db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_quiz1_quiz1`
    FOREIGN KEY (`quiz_id`)
    REFERENCES `survey-db`.`quizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`quiz_states` ;

CREATE TABLE IF NOT EXISTS `mydb`.`quiz_states` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `state_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`quiz_actions` ;

CREATE TABLE IF NOT EXISTS `mydb`.`quiz_actions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `at` DATETIME NOT NULL,
  `quizes_id` INT NOT NULL,
  `quiz_states_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_quiz_states_quizes1_idx` (`quizes_id` ASC) VISIBLE,
  INDEX `fk_quiz_actions_quiz_states1_idx` (`quiz_states_id` ASC) VISIBLE,
  CONSTRAINT `fk_quiz_states_quizes1`
    FOREIGN KEY (`quizes_id`)
    REFERENCES `survey-db`.`quizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_quiz_actions_quiz_states1`
    FOREIGN KEY (`quiz_states_id`)
    REFERENCES `survey-db`.`quiz_states` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`results` ;

CREATE TABLE IF NOT EXISTS `mydb`.`results` (
  `id` INT NOT NULL,
  `options_id` INT NOT NULL,
  `experts_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_results_answers1_idx` (`options_id` ASC) VISIBLE,
  INDEX `fk_results_experts1_idx` (`experts_id` ASC) VISIBLE,
  CONSTRAINT `fk_results_answers1`
    FOREIGN KEY (`options_id`)
    REFERENCES `survey-db`.`options` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_results_experts1`
    FOREIGN KEY (`experts_id`)
    REFERENCES `survey-db`.`experts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`experts_has_results` ;

CREATE TABLE IF NOT EXISTS `mydb`.`experts_has_results` (
  `experts_id` INT NOT NULL,
  `results_id` INT NOT NULL,
  PRIMARY KEY (`experts_id`, `results_id`),
  INDEX `fk_experts_has_results_results1_idx` (`results_id` ASC) VISIBLE,
  INDEX `fk_experts_has_results_experts1_idx` (`experts_id` ASC) VISIBLE,
  CONSTRAINT `fk_experts_has_results_experts1`
    FOREIGN KEY (`experts_id`)
    REFERENCES `survey-db`.`experts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_experts_has_results_results1`
    FOREIGN KEY (`results_id`)
    REFERENCES `survey-db`.`results` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`results_has_experts` ;

CREATE TABLE IF NOT EXISTS `mydb`.`results_has_experts` (
  `results_id` INT NOT NULL,
  `experts_id` INT NOT NULL,
  PRIMARY KEY (`results_id`, `experts_id`),
  INDEX `fk_results_has_experts_experts1_idx` (`experts_id` ASC) VISIBLE,
  INDEX `fk_results_has_experts_results1_idx` (`results_id` ASC) VISIBLE,
  CONSTRAINT `fk_results_has_experts_results1`
    FOREIGN KEY (`results_id`)
    REFERENCES `survey-db`.`results` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_results_has_experts_experts1`
    FOREIGN KEY (`experts_id`)
    REFERENCES `survey-db`.`experts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`experts_has_results1` ;

CREATE TABLE IF NOT EXISTS `mydb`.`experts_has_results1` (
  `experts_id` INT NOT NULL,
  `results_id` INT NOT NULL,
  PRIMARY KEY (`experts_id`, `results_id`),
  INDEX `fk_experts_has_results1_results1_idx` (`results_id` ASC) VISIBLE,
  INDEX `fk_experts_has_results1_experts1_idx` (`experts_id` ASC) VISIBLE,
  CONSTRAINT `fk_experts_has_results1_experts1`
    FOREIGN KEY (`experts_id`)
    REFERENCES `survey-db`.`experts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_experts_has_results1_results1`
    FOREIGN KEY (`results_id`)
    REFERENCES `survey-db`.`results` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

## RESTfull сервіс для управління даними

