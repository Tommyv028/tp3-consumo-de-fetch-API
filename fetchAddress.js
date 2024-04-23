const petitionUno =  fetch('https://apis.datos.gob.ar/georef/api/direcciones?direccion=Lucilo%20B.%20L%C3%B3pez%201289&departamento=Concepci%C3%B3n%20del%20Uruguay&provincia=Entre%20R%C3%ADos&#39')
const petitionDos =  fetch('https://apis.datos.gob.ar/georef/api/direcciones?direccion=Sarmiento%201247&departamento=Concepci%C3%B3n%20del%20Uruguay&provincia=Entre%20R%C3%ADos&#39')

petitionUno
.then(respuesta => respuesta.json())
.then(data => {
    console.log(data)
})
.catch(console.warn)

petitionDos
.then(respuesta => respuesta.json())
.then(data => {
    console.log(data)
})
.catch(console.warn)