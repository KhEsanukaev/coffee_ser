const mongoose = require("mongoose");

const drinkShema = mongoose.Schema({
    name: String,
    price: Number,
    available:Boolean, 
    caffeine: Boolean,
    volume: Number,
    description: String,
  
});

const Drink = mongoose.model("Drink", drinkShema);

module.exports = Drink; 
