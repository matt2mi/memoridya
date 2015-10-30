var mongoose = require('mongoose');
 
var MemorySchema = mongoose.Schema({
    memoryId: String,
    memoryTitle: String,
    memoryContent: String
});
 
module.exports = mongoose.model('Memory', MemorySchema);
