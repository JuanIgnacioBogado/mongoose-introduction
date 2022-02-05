require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {
    // const result = await Product.deleteMany({name: 'keyboard'});
    // const result = await Product.deleteOne({name: 'laptop hp'});
    // const result = await Product.findOneAndDelete({name: 'laptop lenovo'});
    const result = await Product.findByIdAndDelete('61feeda7d556d1565dd097a6');
    console.log(result);
}

someFunction();