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
    REFERENCES `mydb`.`users` (`id`)
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
    REFERENCES `mydb`.`users` (`id`)
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
    REFERENCES `mydb`.`quizes` (`id`)
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
    REFERENCES `mydb`.`questions` (`id`)
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
    REFERENCES `mydb`.` options` (`id`)
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
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_quiz_quiz1`
    FOREIGN KEY (`quiz_id`)
    REFERENCES `mydb`.`quizes` (`id`)
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
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_quiz1_quiz1`
    FOREIGN KEY (`quiz_id`)
    REFERENCES `mydb`.`quizes` (`id`)
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
    REFERENCES `mydb`.`quizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_quiz_actions_quiz_states1`
    FOREIGN KEY (`quiz_states_id`)
    REFERENCES `mydb`.`quiz_states` (`id`)
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
    REFERENCES `mydb`.`options` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_results_experts1`
    FOREIGN KEY (`experts_id`)
    REFERENCES `mydb`.`experts` (`id`)
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
    REFERENCES `mydb`.`experts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_experts_has_results_results1`
    FOREIGN KEY (`results_id`)
    REFERENCES `mydb`.`results` (`id`)
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
    REFERENCES `mydb`.`results` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_results_has_experts_experts1`
    FOREIGN KEY (`experts_id`)
    REFERENCES `mydb`.`experts` (`id`)
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
    REFERENCES `mydb`.`experts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_experts_has_results1_results1`
    FOREIGN KEY (`results_id`)
    REFERENCES `mydb`.`results` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

## RESTfull сервіс для управління даними

### Index.js

```
'use strict';

const express = require('express');
const { Pool } = require('./db/pool.js');
const { get, getAll, post, postQuiz, deleted, update } = require('./controller/controllers.js');

const app = express();
const jsonParse = express.json();

app.post('/quiz/', jsonParse, postQuiz);
app.get('/question/:id', get);
app.get('/questions/', getAll);
app.post('/question/', jsonParse, post);
app.put('/question/:id', jsonParse, update);
app.delete('/question/:id', deleted);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

```

### Pool.js

```
'use strict';

const mysql = require('mysql2');

const Pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

module.exports = { Pool };
```

### Controllers.js

```
'use strict';

const { Pool } = require('../db/pool.js');

const getMaxQuestionId = () => {
    const sql = 'SELECT MAX(id) FROM mydb.questions';
    return new Promise((resolve, reject) => {
        Pool.query(sql, (error, result, fields) => {
            if (error) {
                console.error('Error fetching max question ID:', error);
                return reject(error);
            }
            return resolve(result);
        });
    });
};

const postQuiz = (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const sql = 'INSERT INTO mysql2.quizes (name) VALUES (?)';
    Pool.query(sql, [req.body.name], (error, result) => {
        if (error) {
            console.error('Error inserting quiz:', error);
            return res.status(500).json(error);
        }
        res.send(result);
    });
};

const get = (req, res) => {
    const sql = `SELECT * FROM mydb.questions WHERE id = ${req.params.id}`;
    Pool.query(sql, (error, result, fields) => {
        if (error) {
            console.error('Error fetching question:', error);
            return res.status(500).json(error);
        }
        if (result.length) {
            res.send(result);
        } else {
            res.sendStatus(404);
        }
    });
};

const getAll = (req, res) => {
    const sql = 'SELECT * from mydb.questions';
    Pool.query(sql, (error, result, fields) => {
        if (error) {
            console.error('Error fetching all questions:', error);
            return res.status(500).json(error);
        }
        res.send(result);
    });
};

const post = (req, res) => {
    if (!req.body) return res.sendStatus(400);
    getMaxQuestionId().then(data => {
        let maxId = data[0]['MAX(id)'];
        const sql = `INSERT INTO mydb.questions (id, type, text, quiz_id) VALUES (${++maxId},\"${req.body.type}\", \"${req.body.text}\", ${req.body.quiz_id})`;
        Pool.query(sql, (error, result, fields) => {
            if (error) return res.status(500).json(error);
            result ? res.send(result) : res.sendStatus(404);
        });
    });
};

const deleted = (req, res) => {
    const sql = `DELETE FROM mydb.questions WHERE id = ${req.params.id}`;
    Pool.query(sql, (error, result, fields) => {
        if (error) {
            console.error('Error deleting question:', error);
            return res.status(500).json(error);
        }
        if (result.affectedRows) {
            res.send(result);
        } else {
            res.sendStatus(404);
        }
    });
};

const update = (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const sql = `UPDATE mydb.questions SET type = \"${req.body.type}\", text = \"${req.body.text}\", quiz_id = ${req.body.quiz_id} WHERE id = ${req.params.id}`;
    Pool.query(sql, (err, result, fields) => {
        if (err) {
            console.error('Error updating question:', err);
            return res.status(500).json(err);
        }
        if (result.affectedRows) {
            res.send(result);
        } else {
            res.sendStatus(404);
        }
    });
};

module.exports = { get: get, getAll: getAll, post: post, postQuiz, deleted: deleted, update: update };
```