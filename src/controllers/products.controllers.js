import productDAO from "../dao/products.dao.js";
export const getAll=(req,res)=>{
    productDAO.getAll()
    .then(products=> res.render('../src/views/index',{products}))
    .catch(err=> res.json({
        status:"server unavailable"
    }));
   
};

export const getOne=(req,res)=>{
    productDAO.getOne(req.params.barcode)
    .then(product=> {

        !product ? res.json({
            message: "Server unavailable"
        }) :res.render('../src/views/edit',{product})
    })
    .catch(err=>res.json({
        status:"server unavilable"
    }))
} ;

export const insertOne=(req,res)=>{
    const product = req.body
    console.log(product)
    productDAO.insertOne(req.body)
    .then(result=>res.redirect('/'))
    .catch(err=>res.json({status:"server unavailable"}));
};

export const deleteOne=(req,res)=>{
    productDAO.deleteOne(req.params.barcode)
    .then(result=>res.redirect('/'))
    .catch(err=>res.json({status: "Server unavaliable =/"}));
}
export const updateOne=(req,res)=>{
    console.log(req.body)
    productDAO.updateOne(req.params.barcode, req.body)
    .then(result=>res.redirect('/'))
    .catch(err=>res.json({status: "Server unavaliable =/"}));
}

