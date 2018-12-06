const faker = require(`faker`);
const ProductModel = require(`./models/product_model`);
const mongoose = require(`mongoose`);

mongoose.connect(`mongodb://localhost/fakebae`, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on(`error`, console.log);

//using `.all` as we just want to shoot them off, and get them back when they are all done
let productPromises = [];

for(let i = 0; i<= 50; i++) {
    productPromises.push(ProductModel.create({
        name: faker.commerce.productName(),
        categories: [faker.commerce.department(), faker.commerce.department()],
        price: faker.commerce.price()
    }));
}

Promise.all(productPromises)
    .then(() => {
        console.log(`All seeds completed`);
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });