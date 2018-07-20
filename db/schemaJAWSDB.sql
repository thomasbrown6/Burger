### Schema


USE jsulndbveue07l9f;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);