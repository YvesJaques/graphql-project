const products = [
    { id: 'redshoe', description: 'Red Shoe', price: 42.12, reviews: [] },
    { id: 'bluejean', description: 'Blue Jeans', price: 55.55, reviews: [] },
]

function getAllProducts() {
    return products
}

function getProductsByPrice(min, max) {
    return products.filter(product => {
        return product.price >= min && product.price <= max
    })
}

function getProductById(id) {
    return products.find(product => {
        return product.id === id
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    }

    products.push(newProduct)
    return newProduct
}

function addReview(id, rating, comment) {
    const review = {
        rating,
        comment,
    }

    const productIndex = products.findIndex(product => {
        return product.id === id
    })

    if (productIndex === -1) {
        throw new Error('Product not found')
    }

    products[productIndex].reviews.push(review)

    return review
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addReview
}