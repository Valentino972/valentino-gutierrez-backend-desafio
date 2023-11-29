import {Router} from 'express';
import {CartManagerFile} from '../managers/CartManagerFile.js';

const path = 'carts.json';
const router = Router();
const cartManagerFile = new CartManagerFile(path);


router.get('/', async (req,res)=>{
    const carts = await cartManagerFile.getCarts()

    res.send({
        status: 'succes',
        carritos: carts
    })
})

router.get('/:cid', async (req,res)=>{
    const cid = req.params.cid;
    const cart = await cart.getCarts();

    res.send({
        status: 'succes',
        products: cart.products
    })
})

router.post('/', async (req,res)=>{ //creacion
    const {products} = req.body;

    const newCart = await cartManagerFile.createCarts(products);

    res.send({
        status: 'success',
        msg: "Nuevo carrito creado",
        cart: newCart
    })
})

router.post('/:cid/product/:pid', async (req,res)=>{ //creacion
    const cid = req.params.cid;
    const pid = req.params.pid;
    const cart = await cartManagerFile.getCarts();

    const {products, quantity} = req.body;

    const existingProductIndex = cart.products.findIndex(p => p.product === parseInt(product));

        if (existingProductIndex !== -1) {
            // Si el producto ya existe en el carrito, incrementa la cantidad
            cart.products[existingProductIndex].quantity += 1;
        } else {
            // Si el producto no existe, agrégalo al carrito con la cantidad proporcionada
            cart.products.push({
                product: parseInt(product),
                quantity: 1
            });
    }
    await fs.writeFile(cartManagerFile.path, JSON.stringify(cart, null, '\t'));
    
    res.send({
        status: 'succes',
        msg: `Producto agregado al carrito`,
        cart

    })
})



export {router as cartRouter}

