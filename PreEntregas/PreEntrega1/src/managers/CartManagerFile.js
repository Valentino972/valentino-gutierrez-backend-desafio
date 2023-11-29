import fs from 'fs';
import path from 'path';
import __dirname from '../utils.js';

class CartManagerFile {
    constructor(pathFile){
        this.path = path.join(__dirname, `/files/${pathFile}`);
    }

    getCarts = async () => {
        if(fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path,'utf-8');
            const carts = JSON.parse(data);
            return carts;
        } else{
            return [];
        }
    }

    createCarts = async (products) => {
        const carts = await this.getCarts();
        
        if(carts.length === 0){
            cart.id = 1;
        } else{
            cart.id = carts[carts.length-1].id +1;
        }

        const newCart = {
            id: carts.length +1,
            products: products || []
        }
        

        carts.push(newCart);
        await fs.promises.writeFile(this.path, JSON.stringify(carts,null,'\t'))
        return newCart
    }


}

export {CartManagerFile}; 