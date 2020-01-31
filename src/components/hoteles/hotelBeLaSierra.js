import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [0] significa que es el primer hotel del archivo JSON, es decir, el hotel princess

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.SantaMarta[0].hotel}
            datosCarrusel={datosCarrusel.hotelBeLaSierra}
            datosPaseos ={datosPaseos.SantaMarta} 
            video = {datosHotel.SantaMarta[0].video}
            subtitulo = {datosHotel.SantaMarta[0].subtitulo}
            datosHotel = {datosHotel.SantaMarta[0].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SantaMarta[0].ubicacion}
            dondeQueda = {datosHotel.SantaMarta[0].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SantaMarta[0].plan}
            noIncluye = {datosHotel.SantaMarta[0].noIncluye}
            fotos = {datosHotel.SantaMarta[0].fotos}
            webOficial = {datosHotel.SantaMarta[0].webOficial}
            tripAdvisor = {datosHotel.SantaMarta[0].tripAdvisor}
            />
        )
        
    }

}

export default elHotel