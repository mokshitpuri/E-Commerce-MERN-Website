const mongoose= require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique:true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        categories: {type: Array},
        star: {type: Array},
        type: {type: String},
        ton: {type: Array},
        color: {type: Array},
        price: {type: Number, required: true},
        inStock: {type: Boolean, default: true},
    
},{timestamps:true})

module.exports = mongoose.model("Product", ProductSchema);