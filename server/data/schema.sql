CREATE DATABASE `BCG` IF NOT EXISTS;

CREATE TABLE IF NOT EXISTS `BCG`.`customer` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `gender` ENUM('M', 'F', 'T') NULL,
  `income` INT NULL,
  `region` VARCHAR(45) NULL,
  `marital_status` INT(1) NULL,
  `customercol` VARCHAR(45) NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `BCG`.`insurance_policies` (
  `policy_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `date_of_purchase` DATETIME NULL,
  `vehicle_segment` VARCHAR(1) NULL,
  `fuel` VARCHAR(5) NULL,
  `premium` INT(10) NULL,
  `bodily_injury_liability` INT(1) NULL,
  `personal_injury_protection` INT(1) NULL,
  `property_damage_liability` INT(1) NULL,
  `collision` INT(1) NULL,
  `comprehensive` INT(1) NULL,
  PRIMARY KEY (`policy_id`),
  INDEX `policy_customer_fk_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `policy_customer_fk`
    FOREIGN KEY (`customer_id`)
    REFERENCES `BCG`.`customer` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

