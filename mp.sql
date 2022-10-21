DROP DATABASE `resume_parser`;
CREATE DATABASE `resume_parser`;
Use resume_parser;
CREATE TABLE `candidate_info` (
	`resume_id` bigint(20) NOT NULL AUTO_INCREMENT,
	`application_date` DATE DEFAULT NULL,
	`name` varchar(255) NULL,
	`email_add` varchar(255) NULL,
	`job_applied` varchar(255) NULL,
	`res_status` varchar(255) NULL,
	`phone_no` varchar(255) NULL,
	`education_level` varchar(255) NULL,
	`filepath` varchar(255) NULL,
	`total_skills` TEXT NULL,
	`total_experience` varchar(255) NULL,
	`relevant_job` varchar(255) NULL,
	`education_school` varchar(255) NULL,
	`total_per` FLOAT NULL,
	PRIMARY KEY(`resume_id`)
)ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `user_table` (
	`user_id` bigint(20) NOT NULL AUTO_INCREMENT,
	`username` varchar(255) NULL,
	`password` varchar(255) NULL,
	`email_user` varchar(255) NULL,
	`first_name` varchar(255) NULL,
	`last_name` varchar(255) NULL,
	PRIMARY KEY (`user_id`)
)ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ;

