const passport = require('passport');
const express = require('express');

var router = express.Router();

function isLoggedIn(req,res,next){
    if(req.isAuthenticated())
    return next()

    res.redirect('/') // it is used for redirected to facebook auth page or logine page again

}

router.get('/',(req,res)=>{
    res.render('pages/index.ejs');
});

router.get('/profile',isLoggedIn, function(req,res){
    res.render('pages/profile.ejs',{
        user:req.user
    });
})

router.get('/error', isLoggedIn, function(req,res){
    res.render('pages/error.ejs')
})

router.get('/auth/facebook',passport.authenticate('facebook',{
    scope:['public_profile','email']
}));

router.get('/auth/facebook/callback',function(){
    passport.authenticate('facebook', {
        successRedirect:'/profile',
        failureRedirect:'/error'
    })
})

router.get('/logout', function (req,res){
    req.logOut();
    res.redirect('/');

})

module.exports=router;