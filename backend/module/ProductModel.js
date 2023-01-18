const { Schema, Mongoose, default: mongoose } = require("mongoose");

const Product = new Schema({
    name: {
        type:String
    },
    price: {
        type:Number
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref:'Category'
    },
    info: {
        type:String
    },
    image: {
        type:URL
    },
    rating: {
        type:Number
    },
    review: {
        userId: {
            type: mongoose.Types.ObjectId,
            ref:'User'
        },
        description: {
            type:String
        }
    }
})

module.exports = mongoose.model('Product', Product);