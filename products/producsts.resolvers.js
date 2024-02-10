const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: async (parent) => {
            return productsModel.getAllProducts();
        }
    }
}