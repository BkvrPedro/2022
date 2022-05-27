
CREATE DATABASE catalogo_pokemon;

CREATE TABLE Usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  senha VARCHAR NOT NULL
  );

CREATE TABLE Pokemons (
  id SERIAL PRIMARY KEY,
  usuario_id INT NOT NULL REFERENCES Usuarios(id),
  nome VARCHAR NOT NULL,
  habilidades VARCHAR NOT NULL,
  imagem VARCHAR,
  apelido VARCHAR
  );






