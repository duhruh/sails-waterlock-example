/**
 * UserController.js 
 * 
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *                 
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
  /* e.g.
    action: function(req, res){
  
    }
  */
  create: function(req,  res){
    var params = waterlock._utils.allParams(req); 
    var auth = {
      email: params.email, 
      password: params.password
    }; 
    delete(params.email); 
    delete(params.password); 
    User.create(params).exec(function(err,  user){
      if(err){
        console.log(err); 
      }
      waterlock.engine.attachAuthToUser(auth, user, function(err, ua){
        if(err){
          res.json(err); 
        }else{
          waterlock.cycle.loginSuccess(req, res, ua); 
        }
      }); 
    }); 
  }
});
