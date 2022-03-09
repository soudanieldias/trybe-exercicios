CREATE TABLE IF NOT EXISTS model_example.users (
	id INT AUTO_INCREMENT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    PRIMARY KEY(id)
);

SHOW TABLES;