module.exports = function(app){
  function reply(req,res) {
    res.status(200).send({ok:true})
  }
  app.put('/neb/tasks/updateinvstatus',reply);
  app.put('/neb/inventories/updateinvstatus',reply);
}
