const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dinkerdeep:dsWHKzr4GrKUjeYM@cluster0.zayfux2.mongodb.net/touch-grass-sim");

const imageSchema = new mongoose.Schema({
    id: Number,
    image: String
});
const Image = mongoose.model('Image', imageSchema);

module.exports = {
    Image
}