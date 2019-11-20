const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema
const parkSchema = new Schema({
    name: String,
    description: String,
    inversions: Number,
    lenght: Number,
    active: { "type": "boolean" },
    park: {type: Schema.Types.ObjectId,ref: "Park"}

})
module.exports = mongoose.model('Park', parkSchema)
