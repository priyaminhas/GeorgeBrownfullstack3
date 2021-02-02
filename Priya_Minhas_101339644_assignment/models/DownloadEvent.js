const mongoose = require('mongoose');

const downloadEvent = mongoose.Schema({
    socket:{
        type:String,
        require:true
    },
    songId:{
        type:String,
        require:true
    },
   downloadTime:{
        type:Date,
        require:true
    }
});

const DownloadEvent = mongoose.model('DownloadEvent',downloadEvent);
module.exports    = DownloadEvent;