var Memory = require('../models/memory');
var memories = {
  
  getAll: function(req, res) {
    Memory.find(function (err,memories) {
      if (err) {
        console.log(err);
      } else {
        res.send(memories);
      }
    });
  },
 
  getOne: function(req, res) {
    var id = req.params.id;
    Memory.findOne({ memoryId: id }, function (err,memory) {
      if (err) {
        console.log(err);
      } else {
        if (memory) {
          res.send(memory);
        } else {
          res.status(404);
          res.json({
            "status": 404,
            "message": "Not Found"
          });
        }
      }
    });
  },
 
  create: function(req, res) {
    var body = req.body;
    Memory.findOne({ memoryId: body.memoryId }, function (err,memory) {
      if (err) {
        console.log(err);
      } else {
        if (memory) {
          res.status(409);
          res.json({
            "status": 409,
            "message": "Memory already exists."
          });
        } else {
          var newMemory = new Memory({
            memoryId: body.memoryId,
            memoryContent: body.memoryContent
          });
          newMemory.save(function(err,newMemory) {
            if (err) {
              return console.error(err);
            } else {
              res.json(newMemory);
            }
          });
        }
      }
    });
  },
 
  update: function(req, res) {
    var body = req.body;
    var id = req.params.id;
 
    Memory.findOne({ memoryId: id }, function (err,memory) {
      if (err) {
        console.log(err);
      } else {
        if (memory) {
          Memory.findOneAndUpdate({memoryId:id},body, function (err,updatedmemory) {
            if (err) {
              console.log(err);
            } else {
              res.json(updatedmemory);
            }
          });
        } else {
          res.status(404);
          res.json({
            "status": 404,
            "message": "Not Found"
          });
        }
      }
    });
 
  },
 
  delete: function(req, res) {
    var id = req.params.id;
    Memory.findOne({ memoryId: id }, function (err,memory) {
      if (err) {
        console.log(err);
      } else {
        if (memory) {
          Memory.remove({memoryId: id}, function (err,memory) {
            if (err) {
              console.log(err);
            } else {
              // normally we would return a 'true' or 'false' to our client, but let's output a status
              // for illustration purposes
              res.status(200);
              res.json({
                "status": 200,
                "message": "delete of " + id + " succeeded."
              });
            }
          });
        } else {
          res.status(404);
          res.json({
            "status": 404,
            "message": "Not Found"
          });
        }
      }
    });
  }
};
 
module.exports = memories;
