CREATE DATABASE IF NOT EXISTS d1vbj3tecjalio;

    CREATE TABLE IF NOT EXISTS Users(
        id SERIAL NOT NULL,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        PRIMARY KEY(id)
    );

  CREATE TABLE IF NOT EXISTS Tasks(
      id SERIAL NOT NULL,
      username VARCHAR(100) NOT NULL,
      title VARCHAR(100) NOT NULL,
      dsc VARCHAR(100) NOT NULL,
      tag VARCHAR(100) NOT NULL,
      dt VARCHAR(100) NOT NULL,
      PRIMARY KEY(id) 
   );