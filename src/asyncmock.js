const products = [
    {
        id: '1',
        title: 'Reloj Mistral Cht-7151-02-c',
        description: 'Reloj analógico con movimiento a cuarzo pantalla con indicador de fecha cronógrafos de segundos, minutos, y 24 horas. Caja y Correa de Acero Inoxidable.',
        category: 'analogico',
        price: 34000,
        imageLink: 'https://http2.mlstatic.com/D_NQ_NP_882263-MLA41107530616_032020-O.webp'
    },

    {
        id: '2',
        title: 'Reloj vintage A-159WA-N1',
        description: 'Iluminación por LED. Cronómetro de 1/100 segundos. Alarma diaria. Señal de hora. Calendario automático.',
        category: 'digital',
        price: 9230,
        imageLink: 'https://http2.mlstatic.com/D_NQ_NP_637545-MLA40124273263_122019-O.webp'
    },

    {
        id: '3',
        title: 'Samsung Galaxy Watch4',
        description: 'Pantalla SAMOLED de 1.2". Apto para descarga de aplicaciones. Resiste hasta 50m bajo el agua. Batería de 40 h de duración. Capacidad de la memoria interna de 16GB.',
        category: 'smart',
        price: 61999,
        imageLink: 'https://http2.mlstatic.com/D_NQ_NP_888122-MLA48026721287_102021-O.webp'
    },


];

const categories = [
    {id: 'analogico', name: 'Analogicos'},
    {id: 'digital', name: 'Digitales'},
    {id: 'smart', name: 'Smartwatches'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(categories)
        }, 500)
    })
}


export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}