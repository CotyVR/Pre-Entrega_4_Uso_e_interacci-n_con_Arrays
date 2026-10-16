const frutas = ['Manzana', 'Pera', 'Frutilla', 'Arandano', 'Melon'];

frutas.push('Manzana');
frutas.unshift('Pera');
frutas.splice(2, 1, 'Platano');

const agotado = frutas.pop();
console.log(`Se ha eliminado el elemento: ${agotado}`);

alert('Tenemos: Manzana, Pera, Platano, Frutilla, Arandano y Melon');

const buscado = prompt('¿Qué fruta deseas?');

if (frutas.includes(buscado)) {
    const posicion = frutas.indexOf(buscado);
    console.log(`${buscado} está en stock, en la posición ${posicion}`);
} else {
    console.log(`${buscado} no está en stock`);
}



function listarStock(lista) {
    console.log('--- Stock actual ---');
    for (const eleccion of lista) {
        console.log(`Producto: ${eleccion}`);
    }
    console.log(`Total: ${lista.length} frutas en stock`);
}

listarStock(frutas);
