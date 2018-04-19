const uuidv4 = require('uuid/v4');
module.exports = function(app){
  app.post('/aspect/taskStart',(req,res) => {
    var response = "<soapenv:Envelope xmlns:soapenv=\"http:\/\/schemas.xmlsoap.org\/soap\/envelope\/\" xmlns:tem=\"http:\/\/tempuri.org\/\" xmlns:eg=\"http:\/\/schemas.datacontract.org\/2004\/07\/eg.WorkManager.Framework.DTO\"><soapenv:Header\/><soapenv:Body><tem:egTaskStartResponse \/><\/soapenv:Body><\/soapenv:Envelope>"
      res.contentType("text/xml");
      res.status(200).send(response);
      });
  app.post('/aspect/taskUpdate',(req,res) => {
    var response = "<soapenv:Envelope xmlns:soapenv=\"http:\/\/schemas.xmlsoap.org\/soap\/envelope\/\" xmlns:tem=\"http:\/\/tempuri.org\/\" xmlns:eg=\"http:\/\/schemas.datacontract.org\/2004\/07\/eg.WorkManager.Framework.DTO\"><soapenv:Header\/><soapenv:Body><tem:egTaskUpdateResponse \/><\/tem:egTaskUpdateResult><\/tem:egTaskUpdateResponse><\/soapenv:Body><\/soapenv:Envelope>"
      res.contentType("text/xml");
      res.status(200).send(response);
      });
  app.post('/aspect/taskClose',(req,res) => {
    var response = "<soapenv:Envelope xmlns:soapenv=\"http:\/\/schemas.xmlsoap.org\/soap\/envelope\/\" xmlns:tem=\"http:\/\/tempuri.org\/\" xmlns:eg=\"http:\/\/schemas.datacontract.org\/2004\/07\/eg.WorkManager.Framework.DTO\"><soapenv:Header\/><soapenv:Body><tem:egTaskEndResponse \/><tem:egTaskEndResult \/><\/tem:egTaskEndResponse><\/soapenv:Body><\/soapenv:Envelope>"
      res.contentType("text/xml");
      res.status(200).send(response);
      });



        }
