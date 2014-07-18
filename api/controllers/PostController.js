/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  restricted: function(req,  res){
    res.json('WHATTTTT restricted'); 
  }, 
  open: function(req, res){
    res.json("YO man open")
  }
	
};

