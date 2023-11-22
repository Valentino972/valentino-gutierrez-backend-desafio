import fs from 'fs';

class ProductManager{

    constructor(){
        this.productos = []; 
        this.path = './productos.json'
    }
    //Metodo para agregar un producto al array y guadarlo en el archivo
    addProduct = async (nombre, descripcion, precio, code, stockDisponible) => {
        const producto = {
            id: this.productos.length +1, 
            nombre,
            descripcion,
            precio,
            code,
            stock: stockDisponible,
        }

        this.productos.push(producto);
        // await this.guardarProductosEnArchivo();
        return this.productos;
        
    }
    //Metodo asincronico para obtener productos desde el archivo
    getProducts = async () => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const productos = JSON.parse(data);
            return productos;
        } catch (error) {
            if (error.code === 'ENOENT') {
                // El archivo no existe, crea uno vacío
                await fs.promises.writeFile(this.path, '[]', 'utf-8');
                return [];
            } else {
                console.error('Error al obtener productos:', error);
                return [];
            }
        }
    }

    //Metodo para obtener un producto por su ID
    getProductById = (idProducto) => {
        const producto = this.productos.find( producto => producto.id == idProducto);
        if(producto){
            return producto;
        }
    }
    //Metodo para actualizar un producto
    updateProduct = async (idProducto, campoActualizado) => {
        
        const productos = await this.getProducts(); //Leer producto

        const indiceProducto = productos.findIndex((producto) => producto.id == idProducto); //Encontrar el i del producto con el ID proporcionado

        if(indiceProducto !== -1){
            //actualizar el producto sin cambiar el id
            productos[indiceProducto] = {...productos[indiceProducto], ...campoActualizado};

            //guardar los productos actualizados en el archivo
            await fs.promises.writeFile(this.path, JSON.stringify(productos, null, 2), 'utf-8');

            return productos[indiceProducto];
        }
        return null;
    }
    //Metodo para eliminar un producto
    deleteProduct = async (idProducto) => {
        const productos = await this.getProducts();

        const productosActualizados = productos.filter((producto) => producto.id != idProducto);

        if(productos.length !== productosActualizados.length) {
            await fs.promises.writeFile(this.path, JSON.stringify(productosActualizados, null,2), 'utf-8');

            return 'Producto Eliminado'
        }else{
            return 'No se encontró el producto con el ID proporcionado'
        }

    }

}

const administradorDeProductos = new ProductManager();

//ejemplo agregar producto
administradorDeProductos.addProduct('Producto 1', 'Descripcion 1', 20, 'ABC1',100);
administradorDeProductos.addProduct('Producto 2', 'Descripcion 2', 20, 'ABC2',100);
administradorDeProductos.addProduct('Producto 3', 'Descripcion 3', 20, 'ABC3',100);
administradorDeProductos.addProduct('Producto 4', 'Descripcion 4', 20, 'ABC4',100);

//ejemplo eliminar producto
// const resultadoEliminar = await administradorDeProductos.deleteProduct(1);
// console.log(resultadoEliminar);

//ejemplo obtener todos los productos
// const todosLosProductos = await administradorDeProductos.getProducts();
// console.log(todosLosProductos);
