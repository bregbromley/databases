CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER AUTO_INCREMENT,
  messageText VARCHAR(1000),
  user_id INTEGER,
  room_id INTEGER,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  username VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INTEGER AUTO_INCREMENT,
  roomname VARCHAR(30),
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

