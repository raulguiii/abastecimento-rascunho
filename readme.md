banco: 

CREATE DATABASE db_semecti_abastecimento; 
USE db_semecti_abastecimento;

-- Tabela Usuários
-- Para criar usuario o departamento deve ser informado dessa forma 'Admin','Almoxarifado','Comunicação', 'DEE', 'Casa_de_Projetos', 'Engenharia_Manutenção', 'Engenharia_Projetos', 'Gabinete','Logística', 'Informática', 'Núcleo', 'Nutrição', 'Supervisão', 'Vigilância'
-- Qualquer departamento escrito diferente vai dar pau
Select * from usuarios;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    departamento VARCHAR(100) NOT NULL,
    rgf VARCHAR(50),
    cpf VARCHAR(50) UNIQUE NOT NULL
);
-- Usuário Admin
INSERT INTO usuarios (nome_completo, senha, cargo, departamento, rgf, cpf) VALUES ('Raul Guilherme', '48816520876', 'Admin', 'Admin', '20000', '48816520876');

-- Usuário Departamento 
INSERT INTO usuarios (nome_completo, senha, cargo, departamento, rgf, cpf) VALUES ('Raul Guilherme', '48816520876', 'Admin', 'Admin', '20000', '48816520876');

-- Atualizar Usuário
UPDATE usuarios 
SET 
    nome_completo = 'Ferraz', 
    senha = 'Ferraz', 
    cargo = 'Motorista', 
    departamento = 'Logística', 
    rgf = '1979' 
WHERE id = 6;


-- Tabela Geral
CREATE TABLE abastecimentoGeral ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoGeral;
DROP TABLE IF EXISTS abastecimentoGeral;


-- Tabela Almoxarifado
CREATE TABLE abastecimentoAlmox ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL, 
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoAlmox;
DROP TABLE IF EXISTS abastecimentoAlmox;




-- Tabela Casa de Projetos
CREATE TABLE abastecimentoCasaDeProjetos ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL, 
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoCasaDeProjetos;
DROP TABLE IF EXISTS abastecimentoCasaDeProjetos;

-- Tabela Comunicação
CREATE TABLE abastecimentoComunicacao ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoComunicacao;
DROP TABLE IF EXISTS abastecimentoComunicacao;


-- Tabela Comunicação
CREATE TABLE abastecimentoDEE ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoDEE;
DROP TABLE IF EXISTS abastecimentoDEE;


-- Tabela Engenharia Manutenção
CREATE TABLE abastecimentoEng1 ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoEng1;
DROP TABLE IF EXISTS abastecimentoEng1;


-- Tabela Engenharia Projetos
CREATE TABLE abastecimentoEng2 ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoEng2;
DROP TABLE IF EXISTS abastecimentoEng2;

-- Tabela Gabinete
CREATE TABLE abastecimentoGabinete ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoGabinete;
DROP TABLE IF EXISTS abastecimentoGabinete;

-- Tabela Informática
CREATE TABLE abastecimentoInformatica ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoInformatica;
DROP TABLE IF EXISTS abastecimentoInformatica;

-- Tabela Logística
CREATE TABLE abastecimentoLogistica ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoLogistica;
DROP TABLE IF EXISTS abastecimentoLogistica;


-- Tabela Núcleo
CREATE TABLE abastecimentoNucleo ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoNucleo;
DROP TABLE IF EXISTS abastecimentoNucleo;

-- Tabela Nutrição 
CREATE TABLE abastecimentoNutricao ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoNutricao;
DROP TABLE IF EXISTS abastecimentoNutricao;

-- Tabela Supervisao 
CREATE TABLE abastecimentoSupervisao ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoSupervisao;
DROP TABLE IF EXISTS abastecimentoSupervisao;

-- Tabela Vigilancia 
CREATE TABLE abastecimentoVigilancia ( 
	id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    rgf VARCHAR(50) NOT NULL, 
    km INT NOT NULL, 
    placa VARCHAR(20) NOT NULL, 
    data DATE NOT NULL, 
    posto VARCHAR(255) NOT NULL, 
    comprovante VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    litros DECIMAL(10,2) NOT NULL
);
Select * from abastecimentoVigilancia;
DROP TABLE IF EXISTS abastecimentoVigilancia;





show tables


TRUNCATE TABLE abastecimentoAlmox;
TRUNCATE TABLE abastecimentoCasaDeProjetos;
TRUNCATE TABLE abastecimentoComunicacao;
TRUNCATE TABLE abastecimentoDEE;
TRUNCATE TABLE abastecimentoEng1;
TRUNCATE TABLE abastecimentoEng2;
TRUNCATE TABLE abastecimentoGabinete;
TRUNCATE TABLE abastecimentoInformatica;
TRUNCATE TABLE abastecimentoLogistica;
TRUNCATE TABLE abastecimentoNucleo;
TRUNCATE TABLE abastecimentoNutricao;
TRUNCATE TABLE abastecimentoSupervisao;
TRUNCATE TABLE abastecimentoVigilancia;
TRUNCATE TABLE abastecimentoGeral;
TRUNCATE TABLE usuarios;


