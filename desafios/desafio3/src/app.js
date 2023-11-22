import express from 'express';
import { ProductManager } from '../../desafio1/desafio1';

const PORT = 8080;

const app = express();

app.get('/products', (req,res) =>{
    const productManager = new ProductManager();
    const products = productManager.getProducts();
})

app.listen(PORT,()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
})