import express from 'express';
import { cartRouter } from './routes/carts.routes.js';
import { producstRouter } from './routes/products.routes.js';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en puerto: ${PORT}`);
})


//Inicializar las rutas
app.use('/api/products', producstRouter);
app.use('/api/carts', cartRouter);