const Product = require('../module/ProductModel');
const Category = require('../module/CategoryModel');

const createProduct = async (req, res, next) => {
    const { name, price, category, info, image } = req.body;

    const categoryExist = await Category.findById(category);

    if (!categoryExist) return res.status(400).json({ message: 'choose valid category' });
    const product = await new Product({ name, price, category, info, image }).save();

    return res.status(200).json({ message: 'product created' }, product);
}


const findProduct = async (req, res, next) => {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: 'product not found' });

    return res.status(200).json({ message: 'product founded', product });
}

module.exports = {
    createProduct,
    findProduct
}