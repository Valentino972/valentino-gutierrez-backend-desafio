//1. Clase Product Manager
export class ProductManager{

    constructor(){
        this.productos = []; //"Base de datos"
        
    }

    getProductos = () => {
        return this.productos;
    }


    getProductById = (idProducto) => {
        const producto = this.productos.find( producto => producto.id == idProducto);
        if(producto){
            return producto;
        }else{
            return 'Not found'
        }
    }

    agregarProducto(nombre, descripcion, precio, code, stockDisponible){
        //Validacion = Todos los campos son obligatorios
        if (!nombre || !descripcion || !precio || !code || !stockDisponible) {
            return 'Todos los campos son obligatorios.';
        }

        //Validacion = No se repita el campo "code"
        const codigoIdentidicador = this.productos.find(producto => producto.code === code);
        if(codigoIdentidicador) {
            return `El código del producto ya existe en: ${code}`;
        }

        const producto = {
            nombre,
            descripcion,
            precio,
            // imagen,
            stock: stockDisponible,
            code,
            id: this.productos.length +1 
        }

        this.productos.push(producto);    
        return this.productos;
        
    }
}

const productManager = new ProductManager();

const producto = productManager.agregarProducto('Iphone 13', 'celular', 250000, 'abc123', 20)


console.log(producto);