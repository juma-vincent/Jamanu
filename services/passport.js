const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

User = mongoose.model('users');

passport.serializeUser((user, done)=>{
  done(null, user.id);
});

passport.deserializeUser(async (id, done)=>{
  const user = await User.findById(id);
  done(null, user);
}); // id here is the token from the request.

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
}, async (accessToken, refreshToken, profile, done)=>{
    const existingUser = await User.findOne({ googleId: profile.id});
    // find one record where google id === profile id   

      if(existingUser){
        return done(null, existingUser);
      }else{
        const user = await new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails
          }).save();
        return done(null, user); 
      }     
             
    } )
); // Passport use this google strategy

