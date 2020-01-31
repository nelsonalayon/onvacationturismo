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
            nombre = {datosHotel.SantaMarta[1].hotel}
            datosCarrusel={datosCarrusel.hotelSánhnaPlus}
            datosPaseos ={datosPaseos.SantaMarta} 
            video = {datosHotel.SantaMarta[1].video}
            subtitulo = {datosHotel.SantaMarta[1].subtitulo}
            datosHotel = {datosHotel.SantaMarta[1].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SantaMarta[1].ubicacion}
            dondeQueda = {datosHotel.SantaMarta[1].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SantaMarta[1].plan}
            noIncluye = {datosHotel.SantaMarta[1].noIncluye}
            fotos = {datosHotel.SantaMarta[1].fotos}
            webOficial = {datosHotel.SantaMarta[1].webOficial}
            tripAdvisor = {datosHotel.SantaMarta[1].tripAdvisor}
            />
        )
        
    }

}

export default elHotel