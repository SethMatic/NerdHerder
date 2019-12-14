CREATE DATABASE IF NOT EXISTS `sheepdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `sheepdb`;
CREATE TABLE IF NOT EXISTS `accounts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `loggedin` bit NOT NULL,
    `username` varchar(50) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `gamedata` (
	`id` int(11) NOT NULL,
	`gametitle` varchar(100) NOT NULL,
    `text` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;