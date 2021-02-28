var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
db = require('./db')();

passport.use(new BasicStrategy(
   function(username, password, done) {
       //var user = { name: "cu_user"}; //could have called to a database to look this up
       var user = db.findOne(req.body.username);
       if (username === user.name && password === password) // triple equal is type and value; double == is just equal
       {
           return done(null, user);
       }
       else
       {
           return done(null, false);
       }
   }
));

exports.isAuthenticated = passport.authenticate('basic', { session: false });
