USE FINANCEIRO_DB;
GO
CREATE TABLE systb_usuario_sistema (id INT PRIMARY KEY NOT NULL, login VARCHAR (50), senha VARCHAR (MAX), idUsuarioCadastro int null, dtExclusao datetime null);
GO