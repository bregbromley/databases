var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          console.log(err);
        }
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) {
          console.log(err);
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          console.log('controller users get ', err);
        }
        res.json(results);
      });
    }, // a function which handles a get request for all users
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) {
          console.log('controller post ', err);
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a user to the database
  },

  rooms: {
    // Ditto as above
    get: function (req, res) {
      models.rooms.get(function(err, results) {
        if (err) {
          console.log('controller rooms get ', err);
        }
        res.json(results);
      });
    }, // a function which handles a get request for all users
    post: function (req, res) {
      var params = [req.body.roomname];
      models.rooms.post(params, function(err, results) {
        if (err) {
          console.log('controller post ', err);
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a user to the database
  }
};

