const { Schema, default: mongoose } = require("mongoose");

const Resturant = new Schema({
    name: {
        type: String,
    },
    location: {
        lat: String,
        long:String
    },
    address: {
        type:String
    },
    pincode: {
        type:String
    },
    product: [
        {
            type: mongoose.Types.ObjectId,
            ref:'Product'
        }
    ],
    bankDetails: {
        type: mongoose.Types.ObjectId,
        ref:'BankDetails'
    },
    image: {
        type:URL
    },
    order: {
        type: mongoose.Types.ObjectId,
        ref:'Order'
    },
    isApproved: {
        type: Boolean,
        default:false
    }
})

module.exports = mongoose.model('Resturant', Resturant);