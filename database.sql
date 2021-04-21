CREATE DATABASE  IF NOT EXISTS crud_arch;
USE crud_arch;

DROP TABLE IF EXISTS clientes;
CREATE TABLE clientes (
	id int NOT NULL AUTO_INCREMENT,
	nome varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
    cidade varchar(255) NOT NULL,
	estado varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO clientes (id, nome, email, cidade, estado) VALUES 
(null, 'Paulo', 'paulo@gmail.com', 'São Paulo', 'São Paulo'),
(null, 'Henrique', 'henrique@gmail.com', 'Rio de Janeiro', 'Rio de Janeiro'),
(null, 'Silva', 'silva@gmail.com', 'Recife', 'Pernambuco');

CREATE USER IF NOT EXISTS 'crud_arch'@'localhost' IDENTIFIED BY 'arch4321';
GRANT ALL PRIVILEGES ON * . * TO 'crud_arch'@'localhost';
FLUSH PRIVILEGES;
