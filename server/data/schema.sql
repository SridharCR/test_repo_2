CREATE DATABASE IF NOT EXISTS `BCG`;

CREATE TABLE `customer` (
   `index` int NOT NULL,
  `Customer_id` int  NOT NULL,
  `Customer_Gender` varchar(20)  NOT NULL,
  `Customer_Income group` varchar(20)  NOT NULL,
  `Customer_Region` varchar(100)  NOT NULL,
  `Customer_Marital_status` int  NOT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB;

CREATE TABLE `insurance_policy` (
   `index` int NOT NULL,
  `Policy_id` int NOT NULL,
  `Customer_id` int NOT NULL,
  `Date of Purchase` datetime NOT NULL,
  `Fuel` varchar(10)NOT NULL,
  `VEHICLE_SEGMENT` varchar(5)NOT NULL,
  `Premium` int NOT NULL,
  `bodily injury liability` smallint NOT NULL,
  `personal injury protection` smallint NOT NULL,
  `property damage liability` smallint NOT NULL,
  `collision` smallint NOT NULL,
  `comprehensive` smallint NOT NULL,
    PRIMARY KEY (`index`)
--      INDEX `policy_customer_fk_idx` (`Customer_id` ASC) VISIBLE,
--  CONSTRAINT `policy_customer_fk`
--    FOREIGN KEY (`Customer_id`)
--    REFERENCES `BCG`.`customer` (`Customer_id`)
--    ON DELETE NO ACTION
--    ON UPDATE NO ACTION
) ENGINE=InnoDB  CHARSET=utf8;
