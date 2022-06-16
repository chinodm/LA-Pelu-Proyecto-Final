// inicio carrito//

// alert ("Bienvenido al Carrito");

// function array(){
//     alert('Agrega 3 nombres al array')
//     const nombresArray = ["Nivardo","Maria Jose","Rene"];
//     for(i=1;i<=3;i++){
//         let nuevoNombre = prompt("Ingresa el nombre");
//         nombresArray.push(nuevoNombre)
//         alert(nuevoNombre + " agregado correctamente")
//     }
//     alert("Estos son los nombres agregados a la lista " + nombresArray + " un total de "+ nombresArray.length + " nombres")
// }

let productos = [
    { nombre: "enjuague", precio: 2500 },
    { nombre: "shampoo", precio: 3500 },
    { nombre: "keratina", precio: 3000 },
    { nombre: "formol", precio: 1000 },
    { nombre: "espuma", precio: 1900 },
];

let shop = [];

seleccion = prompt("Hoy Compramos? si o no");
while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu shop!");
    let precio = 0;
    if (
        
        producto == "enjuague" ||
        producto == "shampoo" ||
        producto == "keratina" ||
        producto == "formol" ||
        producto == "espuma"
        
    ) {
        switch (producto) {
        case "enjuague":
                precio = 950;
                break;
            case "shampoo":
                precio = 1500;
                break;
            case "keratina":
                precio = 3000;
                break;
            case "formol":
                precio = 1800;
                break;
            case "espuma":
                precio = 700;
                break;
            default:
                break;
            }
            shop.push({ producto, precio });
            console.log(shop);
            document.write(producto, precio);
    
} else {
    alert("producto inexistente");
}
seleccion = prompt("queres seguir comprando si o no");
}

const total = shop.reduce((acc, el) => acc + el.precio, 0);


        

    


