const express = require(`express`);
const router = express.Router();
const ProductController = require(`./../controllers/product_controller`)
const ProductModel = require(`./../database/models/product_model`)

router.use(`/:id`, async (req, res, next) => {
    if (req.params.id) {
        let product = await ProductModel.findById(req.params.id);
        req.product = product;
    }

    next();
});

router.get(``, ProductController.index);

router.post(``, ProductController.create);

router.get(`/new`, ProductController.make);

router.get(`/:id`, ProductController.show);

router.put(`/:id`, ProductController.update);

router.patch(`/:id`, ProductController.update);

router.delete(`/:id`, ProductController.destroy);

router.get(`/:id`, ProductController.edit);

module.exports = router;