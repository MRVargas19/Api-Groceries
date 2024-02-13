import Product from '../models/products.model.js';
const productDAO={}
productDAO.getAll=async()=>{
    const products=await Product.find();
    return products;
};
productDAO.getOne=async(barcode)=>{
    const products=await Product.findOne({barcode:
    barcode});
    return products;
};
productDAO.updateOne=async(barcode,product)=>{
    return await Product.findOneAndUpdate({barcode:barcode},product);
};
productDAO.deleteOne=async(barcode)=>{
    return await Product.findOneAndDelete({barcode:barcode});
};
productDAO.insertOne=async(product)=>{
    return await Product.create(product);
};
export default productDAO;