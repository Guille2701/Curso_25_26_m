// Crear un sistema de categorias:
// Crear una variable llamada catalogo que contenga un set de productos.
// Crear las siguientes funciones: agregarProducto q devuelve true o false si el producto ha sido agregado
// crear una funcion llamada mostrar catalogo que muestre todo el catalogo
//adicionalmente crear una funcion llamada buscarProducto que busque por nombre de producto
// nota: cuidado con get q a veces devuelve undefined


const catalogo = new Map<string, Set<string>>();

// function add product

function addProduct(category:string, product:string):void{
    if(!catalogo.has(category)){
        // lo creamos
        catalogo.set(category, new Set<string>())
    }

    // añadimos el producto

    catalogo.get(category)?.add(product);

}

addProduct("Electronica","Portatil hp");
addProduct("Electronica","Portatil hp");
addProduct("Electronica","Mouse");
addProduct("Electronica","Teclado");
addProduct("Deportes","Raqueta de Tenis");
addProduct("Deportes","Zapatillas Nike");
addProduct("Musica","Teclado");


//mostrar catalogo de productos

function showCatalog():void{

    console.log("-------------- catalogo de productos ----------------");
    for( const [categoria, productos] of catalogo){
        console.log(`(┬┬﹏┬┬) Categoria: ${categoria} -- Número de productos: ${productos.size}`)
        for( const producto of productos ){
            console.log(`-༼ つ ◕_◕ ༽つ  ${producto}`);
        }
    }
}

showCatalog();

function searchProduct(nameProduct:string):string[]{

    const categoriasEncontradas:string[]=[];
    for( const [categoria, productos] of catalogo){
        
        if(productos.has(nameProduct)){
            categoriasEncontradas.push(categoria);
        }
    }

    return categoriasEncontradas;

}

console.log(`Las categorias del producto Teclado son: ${searchProduct("Teclado")}`)   // ["Electronica","Musica"]

