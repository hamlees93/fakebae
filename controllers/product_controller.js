const ProductModel = require(`./../database/models/product_model`);

//async means there will be an await call at some point in this function
async function index(req, res) {
    const products = await ProductModel.find();
    res.render(`products/index`, { products });
};

function show(req, res) {
    // const {id} = req.params;
    // const products = await ProductModel.findById(id);
    // res.render(`products/show`, { product });

    //Line below is shorthand for 3 lines above
    res.render(`products/show`, { product: req.product });
};

function make(req, res) {
    res.render(`products/make`);
};

async function create(req, res) {
    const { name, categories, price } = req.body;
    const product = await ProductModel.create({ name, categories, price });

    res.redirect(`/products/${product.id}`);

};

function update(req, res) {
    res.send(`show form to make new product`);
};

function destroy(req, res) {
    res.send(`show form to make new product`);
};

function edit(req, res) {
    const {id} = req.params;
    const product = ProductModel.findById(id);

    res.render(`products/edit`, { product });
};

module.exports = {
    index,
    show,
    make,
    create,
    update,
    destroy,
    edit
};