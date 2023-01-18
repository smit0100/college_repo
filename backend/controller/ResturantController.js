const Resturant = require('../module/ResturantModel');


const createResturnat = async (req, res, next) => {
    const { name, address, location, pincode, image } = req.body;

    const resturant = await new Resturant({ name, address, location, pincode, image }).save();

    return res.status(200).json({
        message: "resturant created",
        resturant
    })
}

const fetchResturant = async (req, res, next) => {
    const { id } = req.params;
    const res = await Resturant.findById(id);

    if (!res) return res.status(400).json({ message: 'resturant not founded' });

    return res.status(200).json({message:"resturant founded"},res)
}

const activeResturant = async (req, res, next) => {
    const { id } = req.params;
    const res = await Resturant.findByIdAndUpdate(id, { isApproved: true });

    return res.status(200).json({ message: 'resturant is active' });
}


module.exports = {
    createResturnat,
    fetchResturant,
    activeResturant
}


