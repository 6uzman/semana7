

// let h1 = document.querySelector('h1')

// h1.addEventListener('click', () => {
//     h1.innerHTML = 'Adios'
// })




let prom = new Promise( function(resolve, reject) {
    let valorArchivo = ''
    for(let i= 0; i < 10000000; i++) {
        valorArchivo += i
    }
    resolve(valorArchivo)
})


prom.then(function(val) {
    console.log( val )
})


prom.catch(function() {

})