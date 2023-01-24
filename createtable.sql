USE FINANCEIRO_DB;
GO
CREATE TABLE systb_usuario_sistema 
(id INT IDENTITY(1,1) PRIMARY KEY ,
login VARCHAR (200) not null,
senha VARCHAR (MAX) not null,
idUsuarioCadastro int null,
dtExclusao datetime null);
GO