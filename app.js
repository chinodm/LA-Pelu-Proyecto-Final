/*Login*/

// Inicio de sesion

const openSesion = document.querySelector("#inicio");
const sesion = document.querySelector("#sesion")
const closeSesion = document.querySelector("#close")

// Mostrar y ocular login screen 

openSesion.addEventListener("click", (e) => {
e.preventDefault();
sesion.classList.add("login--show");
});

closeSesion.addEventListener("click", (e) => {
e.preventDefault();
sesion.classList.remove("login--show");
});
const botonAcceder = document.getElementById("acceder")
const nombreLogeado = document.getElementById("cambioLogeo")
const botonInicio = document.getElementById("inicio")


function logeado() {
Swal.fire({
    icon: 'success',
    title: `Hola! ${usuario.value}`,
    text: 'Bienvenido',

    }) 
sesion.classList.remove("login--show");
botonInicio.classList.add("login--borrar");
let bienvenido = document.createElement("div")
bienvenido.innerHTML = `
<p class="botonLogin">${usuario.value.toUpperCase()}</p>`

nombreLogeado.appendChild(bienvenido);

}



// Validacion de sesion

botonAcceder.addEventListener("click", () => {  
    let usuario = document.querySelector('#usuario').value;
    let contraseña = document.querySelector('#password').value;

    (usuario.toUpperCase() == "CHRISTIAN") && (contraseña === "12345") ? logeado() : 
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'El usuario o contraseña son incorrectos!',

    }) 
});


/*Shop*/

class Producto {
    constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
    this.inPortfolio = false;
    }
    addToPorfolio() {
    this.cantidad++;
    this.inPortfolio = true;
    }
    actualizarPrecioTotal() {
      this.totalPrecio = this.precio * this.cantidad;
    }
}

// array de stock de productos
const stockProductos = [];

//Pusheo los productos al Stock
stockProductos.push(new Producto("01", "Shampoo", 600, './img/shampoo.png'));
stockProductos.push(new Producto("02", "Enjuague", 700, './img/enjuague.png'));
stockProductos.push(new Producto("03", "Keratina",1500, './img/botox.png'));
stockProductos.push(new Producto("04", "Formol",1300, './img/cauterizacion.png'));
stockProductos.push(new Producto("05", "Espuma", 400, './img/gachas-de-avena.png'));
stockProductos.push(new Producto("06", "Oro Liquido", 500, './img/oroliquido.png'));


/* declaracion constantes getElementById */
const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const contadorCarrito = document.getElementById('contadorCarrito')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const pagarCarrito = document.getElementById('pagarCarrito')
const totalPrecioCarrito = document.getElementById('totalPrecioCarrito')
const cantidadTotal = document.getElementById('cantidadTotal')

/* Array Carrito */
let carrito = [];

/* Crear productos en el DOM */

stockProductos.forEach((producto) => {
let card = document.createElement("div")
card.innerHTML = `
<figure class="card m-2">
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        <p class="card-title">${producto.nombre} </p>
        <p class="card-text">$ ${producto.precio}</p>
        <button class="btn btn-primary" id="p${producto.id}">Agregar al Carrito</button>
</figure> 
`
contenedorProductos.appendChild(card);

const boton = document.getElementById(`p${producto.id}`)
boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id)
})

})

// Funcion argegar al carrito

const agregarAlCarrito = (productoId) => {
    const item = carrito.find((producto) => producto.id === productoId);
    if (item) {
    let index = carrito.findIndex((producto) => producto.id === item.id);
    carrito[index].addToPorfolio();
    carrito[index].actualizarPrecioTotal();
    } else {
    let newProducto = stockProductos.find((producto) => producto.id === productoId);
    carrito.push(newProducto);
    carrito[carrito.length - 1].actualizarPrecioTotal();

    }
    actualizarCarrito()
}

const deleteCart = (productoId) => {
    const item = carrito.find((producto) => producto.id === productoId);
    const index = carrito.indexOf(item);
    carrito.splice(index, 1);
    actualizarCarrito()
}

  // Funcion vaciar al carrito

vaciarCarrito.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

  // Funcion pagar carrito
pagarCarrito.addEventListener('click', () => {
    alert(`Tu compra total es de $${totalCarrito}. Gracias!`);
    carrito.length = 0;
    actualizarCarrito()
})

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((producto) => {
    let card = document.createElement("div")
    card.innerHTML = `
    <figure class="card mb-4">
        <div class="row g-0">
            <div class="col-md-3 img-carrito">
                <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.nombre}">
            </div>
            <div class="col-md-6">
            <div class="card-detalle">
                <p class="card-title">${producto.nombre} </p>
                <p class="card-text">Cantidad: ${producto.cantidad}</p>
                <p class="card-text">Total: $ ${producto.totalPrecio}</p>
            </div>   
            </div>
            <div class="col-md-3 d-flex">
                <button class="btn btn-primary eliminar" id="eliminar${producto.id}">Eliminar</button>
            </div>
        </div>
    </figure>  
    `

    contenedorCarrito.appendChild(card);

    const botonDelete = document.getElementById(`eliminar${producto.id}`)
    botonDelete.addEventListener('click', () => {
        deleteCart(producto.id)
    })
    })

    // Funcion localStorage

    localStorage.setItem('carrito', JSON.stringify(carrito))

    contadorCarrito.innerText = carrito.length

    totalPrecioCarrito.innerText = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
    totalCarrito = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito') ) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
    }
})




/*Formulario*/
const $form = document.querySelector("#form")
const $btnMailTo = document.querySelector("#envio")

$form.addEventListener("submit, handleSubmit")

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get("name"))
    $btnMailTo.setAttribute('href', `mailto:chino_d_m@hotmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $btnMailTo.click()

}



