CREATE DATABASE IF NOT EXISTS `sheepdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `sheepdb`;
CREATE TABLE IF NOT EXISTS `accounts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `loggedin` bit NOT NULL DEFAULT FALSE,
    `username` varchar(50) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
INSERT INTO `accounts` (`id`, `loggedin`, `username`, `password`, `email`) VALUES (1, FALSE, 'test', 'test', 'test@testexample23.com');