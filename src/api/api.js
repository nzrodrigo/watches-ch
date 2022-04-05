const products = [
    {
        id: 1,
        title: 'RELOJ MISTRAL GMI-5527-02',
        description: 'Reloj analogo de acero, sumergible 50m. Cuadrante azul oscuro con textura en bajo relieve.',
        price: 34000,
        imageLink: 'https://watchlandsa.vteximg.com.br/arquivos/ids/163373-192-240/GMI-5527-02.jpg?v=637725996945330000/'
    },

    {
        id: 2,
        title: 'RELOJ VINTAGE A-159WA-N1',
        description: 'Iluminación por LED. Cronómetro de 1/100 segundos. Alarma diaria. Señal de hora. Calendario automático.',
        price: 9230,
        imageLink: 'https://watchlandsa.vteximg.com.br/arquivos/ids/158062-192-240/A-159WA-N1.jpg?v=637120303586700000/'
    },

    {
        id: 3,
        title: 'Samsung Galaxy Watch4',
        description: 'Diseño clásico y de primera calidad con bisel giratorio',
        price: 61999,
        imageLink: 'https://images.samsung.com/is/image/samsung/p6pim/ar/2108/gallery/ar-galaxy-watch4-classic-399292-sm-r890nzkaaro-481214314?$2052_1641_PNG$'
    },


];

const promesa = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve(products);
    }, 2000)
})

function getProducts(){
    return promesa;
}

export {
    getProducts,
} 