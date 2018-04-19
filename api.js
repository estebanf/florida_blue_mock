const uuidv4 = require('uuid/v4');
module.exports = function(app){
  app.put('/api/inventories/:invid/tasks',(req,res) => {
    res.status(200).send(uuidv4());
  });

  app.put('/api/v1/inventories/:invrefnumber/assigntasks/:taskrefnumber',(req,res) => {
    res.status(200).send(uuidv4());
  });
  app.put('/api/v1/inventories/:invrefnumber/closetasks/:taskrefnumber',(req,res) => {
    res.status(200).send(uuidv4());
  });
  app.put('/api/v1/inventories/:invrefnumber/tasks/:taskrefnumber',(req,res) => {
    res.status(200).send(uuidv4());
  });
  // app.put('/neb/inventories/updateinvstatus',reply);
}
