const mongoose = require('mongoose');

const socketSchema = mongoose.Schema({
    socket:{
        type:String,
        require:true
    },
    type:{
        type:String,
        enum:['Connection','Disconnect']
    },
    eventTime:{
        type:Date,
        require:true
    }
});

const SocketEvent = mongoose.model('SocketEvent',socketSchema);
module.exports    = SocketEvent;