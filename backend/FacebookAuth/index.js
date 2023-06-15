const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const FAcebookStrategy = require('passport-facebook').Strategy;
const routes = require('./routes/userRoute');
const config = require('./config/config');

const port = 4500;

app.set('view engine','ejs'); // call the view engine

app.use(session({
    resave:false,
    saveUninitialized:true,
    // saveUninitialized:true.valueOf,
    secret:'SECRET'
}));

app.use(passport.initialize());

app.use(passport.session());

passport.serializeUser(function (user,cb){
    cb(null,user)
});

passport.deserializeUser(function (obj,cb){
    cb(null,obj)
});

passport.use( new FAcebookStrategy({
    clientID:config.facebookAuth.clientId,
    clientSecret:config.facebookAuth.clientSecret,
    callbackURL:config.facebookAuth.calbaclURL
    },
    // getting the data from facebook 
    function(accessToken, refreshToken, profile, done){
        // to show the data 
        console.log(profile);
        // done is a call back function 
        return done(null, profile);
    }
))

app.use('/',routes);

app.listen(port,()=>{
    console.log("FaceBook server is start " )
});