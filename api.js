const uuidv4 = require('uuid/v4');
module.exports = function(app){
  app.put('/api/inventories/:invid/tasks',(req,res) => {
    res.status(200).send(uuidv4());
  });

  // app.put('/neb/inventories/updateinvstatus',reply);
}
