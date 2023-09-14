const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        rquired: [true, "Please provide a name"],
        trim: true,
    },
    file: {
        type: String,
        required: [true, "Please provide a file"],
    },
});

module.exports = mongoose.model("Item", itemSchema);