
var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'select messages.id, messages.messageText from messages left outer join users, rooms on (messages.user_id = users.id) AND (messages.room_id = rooms.id) order by messages.id dec';

      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'insert into messages (messageText, user_id, room_id) value (?, (select id from users where username = ? limit 1), ?)';

      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (parms, callback) {
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  rooms: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from rooms';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (parms, callback) {
      var queryStr = 'insert into rooms(roomname) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};

