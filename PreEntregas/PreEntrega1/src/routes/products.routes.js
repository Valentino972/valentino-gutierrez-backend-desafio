import {Router} from 'express';
import {ProductManagerFile} from '../managers/ProductManager.js';
import fs from 'fs';


const path = 'products.json';
const router = Router();
const productManagerFile = new ProductManagerFile(path);


router.get('/', async (req,res)=>{
    const products = await productManagerFile.getProducts()

    res.send({
        status: `succes`,
        productos: products
    })
})

router.get('/:pid', async (req, res) => {
    const pid = req.params.pid;
    const product = await productManagerFile.getProductById(pid);

    if (!product) {
        return res.status(404).send({
            status: 'error',
            message: 'Producto no encontrado'
        });
    }

    res.send(product);
})

router.post('/', async (req,res)=>{ //

    const product = req.body; //json con el producto
    let products = await productManagerFile.createProducts(product);
    products = [{
        title,
        description,
        code,
        price,
        stock,
        category
    }]
    res.send({
        status: `succes`,
        msg: 'Producto creado',
        productos: products
    })
})

router.put('/:pid', async (req,res)=>{

    const pid = req.params.pid;
    const productToUpdate = await productManagerFile.getProductById(pid);

    const updatedProduct = {
        ...productToUpdate,
        ...req.body,
        id: parseInt(pid)
    }

    const products = await productManagerFile.updateProduct(updatedProduct);

    res.send({
        status: `succes`,
        msg: `producto actualizado`,
        producto: updatedProduct
    })
})
router.delete('/:pid', async (req,res)=>{
    
    const pid = req.params.pid
    const products = await productManagerFile.getProducts();

    const updatedProducts = products.filter(product => product.id !== parseInt(pid));

    if (updatedProducts.length === products.length) {
        return res.status(404).send({
            status: 'error',
            message: 'Producto no encontrado'
        });
    }

    await fs.promises.writeFile(productManagerFile.path, JSON.stringify(updatedProducts, null, '\t'));

    
    res.send({
        status: `succes`,
        msg: `Producto eliminado`,
        deleteProductId: parseInt(pid)
    })
})

export {router as producstRouter}

