import { config } from "dotenv";
import express  from "express";
import morgan from "morgan";
import ProductsRouters from './routes/products.routes.js'
config();
const app=express();

app.set('view engine' , 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(ProductsRouters);


export default app;