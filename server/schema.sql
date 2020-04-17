CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  messageText VARCHAR(200) NOT NULL,
  roomname VARCHAR(20),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  PRIMARY KEY (ID)
);

-- CREATE TABLE rooms (
--   id INTEGER AUTO_INCREMENT,
--   roomname VARCHAR(30),
--   PRIMARY KEY (id)
-- );



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

