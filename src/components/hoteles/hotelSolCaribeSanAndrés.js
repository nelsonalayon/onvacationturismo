import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [9] significa que es el primer hotel del archivo JSON, es decir, el hotel sol caribe san andres

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.SanAndres[9].hotel}
            datosCarrusel={datosCarrusel.hotelSolCaribeSanAndres}
            datosPaseos ={datosPaseos.SanAndres} 
            video = {datosHotel.SanAndres[9].video}
            subtitulo = {datosHotel.SanAndres[9].subtitulo}
            datosHotel = {datosHotel.SanAndres[9].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SanAndres[9].ubicacion}
            dondeQueda = {datosHotel.SanAndres[9].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SanAndres[9].plan}
            noIncluye = {datosHotel.SanAndres[9].noIncluye}
            fotos = {datosHotel.SanAndres[9].fotos}
            webOficial = {datosHotel.SanAndres[9].webOficial}
            tripAdvisor = {datosHotel.SanAndres[9].tripAdvisor}
            />
        )
        
    }

}

export default elHotel