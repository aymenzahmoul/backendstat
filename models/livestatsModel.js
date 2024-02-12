const mongoose = require("mongoose");

const LiveStatsSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    TotalHT:{
        type: String,
        required: true,  
    },
    TVA:{
        type: String,
        required:true,
    },
    TotalTTC:{
    type:String,
    required:true,
    },
    Especes:{
        type:String,
        required:true,
    },
    CarteBancaire:{
        type:String,
        required:true,
    },
    Cheques:{
        type:String,
        required:true,
    },
    TicketResto:{
        type:String,
        required:true,
    },
    SurPlace:{
        type:String,
        required:true,
    },
    A_Emporter:{
        type:String,
        required:true,
    },
    Livraison:{
        type:String,
        required:true,
    },
    devise:{
        type:String,
        required:true,
    }

});

const LiveStatsModel = mongoose.model('livestats2', LiveStatsSchema);

module.exports = LiveStatsModel;
