/*
 * GET home page.
 */

exports.deploy = function(req, res){
    console.log('start deploy');
    var result = {};
    result.result = true;
    result.error = null;
    res.send(JSON.stringify(result));
};